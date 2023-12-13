// Browse.js
import React, { useState, useEffect } from 'react';
import GetProducts from '../hooks/GetProducts';
import CreateProducts from '../hooks/CreateProducts';

function Browse({ loggedInUser }) {
  const [count, setCount] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Szűrjük a prémium termékeket
    if (loggedInUser && loggedInUser.accessId >= 2) {
      setFilteredProducts((prevProducts) => {
        return prevProducts.filter(
          (product) => product.accessId === 2 || product.accessId === 1
        );
      });
    }
  }, [loggedInUser, count]);

  const handleCountState = () => {
    setCount(count + 1);
  };

  const handleCreateProductsStateChange = () => {
    console.log('CreateProducts state changed');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <CreateProducts
            stateChange={handleCreateProductsStateChange}
            loggedInUser={loggedInUser}
          />

          {/* loggedInUser prop átadása a GetProducts komponensnek */}
          <GetProducts
            stateChange={handleCountState}
            count={count}
            loggedInUser={loggedInUser}
            products={filteredProducts} // Átadjuk a szűrt termékeket a GetProducts komponensnek
          />
        </div>
      </div>
    </div>
  );
}

export default Browse;
