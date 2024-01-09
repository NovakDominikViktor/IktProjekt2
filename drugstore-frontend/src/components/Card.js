import React from 'react';
import DeleteProduct from '../hooks/DeleteProducts';
import UpdateProduct from '../hooks/UpdateProducts';
import './card.css';

function Card({ id, productName, productBrand, instructions, price, updateCardState, imageUrl, loggedInUser, accessId }) {
  const isUserLoggedIn = loggedInUser && loggedInUser.accessId !== undefined;
  const isPremium = accessId === 2;

  const handleOrderClick = () => {
    if (isUserLoggedIn) {
      alert('Order button clicked');
    } else {
      alert('You need to log in to place an order');
    }
  };

  return (
    <div className={`card mb-3 ${isPremium ? 'premium' : ''}`} key={id}>
      <div className="text-center"> 
        <img src={imageUrl} alt='...' />
      </div>

      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text"><strong>Brand:</strong> {productBrand}</p>
        <p className="card-text"><strong>Instructions:</strong> {instructions}</p>
        <p className="card-text"><strong>Price:</strong> ${price}</p>

        {isUserLoggedIn && loggedInUser.accessId === 3 && (
          <>
            <UpdateProduct
              id={id}
              productName={productName}
              productBrand={productBrand}
              instructions={instructions}
              price={price}
              updateProductState={updateCardState}
              imageUrl={imageUrl}
              accessId={accessId}
              loggedInUser={loggedInUser}
            />

            <DeleteProduct
              id={id}
              updateProductState={updateCardState}
              loggedInUser={loggedInUser}
              disabled={loggedInUser.accessId !== 3}
            />
          </>
        )}
        
     
          <button
            className="btn btn-success"
           
            onClick={handleOrderClick}
          >
            Order
          </button>
        
      </div>
    </div>
  );
}

export default Card;
