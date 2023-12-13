// GetProducts.js
import React, { useState, useEffect } from "react";
import Card from "../components/Card";

export default function GetProducts({ stateChange, count, loggedInUser }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    const url = "https://localhost:7227/Product";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setProducts(data.result);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [count]);

  const filteredProducts = products.filter(
    (product) => product.accessId === 1 || (loggedInUser && loggedInUser.accessId >= 2)
  );

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

  return <>{productsElements}</>;
}
