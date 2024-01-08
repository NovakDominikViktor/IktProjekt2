import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import FilterSortOptions from '../components/FilterSortOptions';

const GetProducts = ({ stateChange, count, loggedInUser }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [sortValue, setSortValue] = useState('name-asc');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
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
    const brandFilteredProducts = filterValue
      ? products.filter((product) => product.productBrand === filterValue)
      : products;

    const searchFilteredProducts = searchTerm
      ? brandFilteredProducts.filter((product) =>
          product.productName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : brandFilteredProducts;

    const userFilteredProducts = searchFilteredProducts.filter(
      (product) => product.accessId === 1 || (loggedInUser && loggedInUser.accessId >= 2)
    );

    const sortedProducts = userFilteredProducts.sort((a, b) => {
      const [prop, order] = sortValue.split('-');

      if (prop === 'name') {
        const aValue = a.productName.toLowerCase();
        const bValue = b.productName.toLowerCase();
        return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }

      const aValue = prop === 'price' ? parseFloat(a[prop]) : a[prop];
      const bValue = prop === 'price' ? parseFloat(b[prop]) : b[prop];

      return order === 'asc' ? aValue - bValue : bValue - aValue;
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

  const productsElements = filteredProducts.map((productobj) => (
    <Card
      key={productobj.id}
      {...productobj}
      updateCardState={stateChange}
      loggedInUser={loggedInUser}
    />
  ));

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
};

export default GetProducts;
