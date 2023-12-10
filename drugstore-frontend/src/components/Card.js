import React from 'react';
import DeleteProduct from '../hooks/DeleteProducts';
import UpdateProduct from '../hooks/UpdateProducts';  
import './card.css';

function Card({ id, productName, productBrand, instructions, price, updateCardState, loggedInUser }) {
  const isUserLoggedIn = loggedInUser && loggedInUser.accessId !== undefined;

  return (
    <div className="card width m-1 p-1 d-inline-block move shadow-5 grow" key={id}>
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">Brand: {productBrand}</p>
        <p className="card-text">Instructions: {instructions}</p>
        <p className="card-text">Price: ${price}</p>

        {/* Include the UpdateProduct component with the necessary props */}
        {isUserLoggedIn && (
          <UpdateProduct
            id={id}
            productName={productName}
            productBrand={productBrand}
            instructions={instructions}
            price={price}
            updateProductState={updateCardState}
            loggedInUser={loggedInUser}
          />
        )}

        {isUserLoggedIn && (
          <DeleteProduct
            id={id}
            updateProductState={updateCardState}
            loggedInUser={loggedInUser}
            disabled={!isUserLoggedIn || (isUserLoggedIn && loggedInUser.accessId !== 3)}
          />
        )}
      </div>
    </div>
  );
}

export default Card;