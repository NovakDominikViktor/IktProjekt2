// GetProducts.js
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import FilterSortOptions from '../components/FilterSortOptions';

export default function GetProducts({ stateChange, count, loggedInUser }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [sortValue, setSortValue] = useState('name-asc');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch products from the API
    const url = 'https://localhost:7227/Product';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setProducts(data.result);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, [count]);

  useEffect(() => {
    // Filter products based on brand
    const brandFilteredProducts = filterValue
      ? products.filter((product) => product.productBrand === filterValue)
      : products;

    // Filter products based on search term
    const searchFilteredProducts = searchTerm
      ? brandFilteredProducts.filter((product) =>
          product.productName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : brandFilteredProducts;

    // Filter products visible to the logged-in user
    const userFilteredProducts = searchFilteredProducts.filter(
      (product) => product.accessId === 1 || (loggedInUser && loggedInUser.accessId >= 2)
    );

    // Sort products based on selected option
    const sortedProducts = userFilteredProducts.sort((a, b) => {
      const [prop, order] = sortValue.split('-');
      const aValue = prop === 'price' ? parseFloat(a[prop]) : a[prop];
      const bValue = prop === 'price' ? parseFloat(b[prop]) : b[prop];

      if (order === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredProducts(sortedProducts);
  }, [filterValue, sortValue, searchTerm, products, loggedInUser]);

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  const handleSortChange = (value) => {
    setSortValue(value);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const productsElements = filteredProducts.map((productobj) => {
    return (
      <Card
        key={productobj.id}
        {...productobj}
        updateCardState={stateChange}
        loggedInUser={loggedInUser}
      />
    );
  });

  return (
    <div>
      <FilterSortOptions
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        onSearchChange={handleSearchChange}
      />
      {productsElements}
    </div>
  );
}