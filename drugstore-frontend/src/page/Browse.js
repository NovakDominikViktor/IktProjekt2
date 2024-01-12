import React, { useState, useEffect } from 'react';
import GetProducts from '../hooks/GetProducts';
import CreateProducts from '../hooks/CreateProducts';

function Browse({ loggedInUser }) {
  const [count, setCount] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12"> {/* Set the column to take up the entire width */}
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <CreateProducts
              stateChange={handleCreateProductsStateChange}
              loggedInUser={loggedInUser}
            />
            <GetProducts
              stateChange={handleCountState}
              count={count}
              loggedInUser={loggedInUser}
              products={filteredProducts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;
