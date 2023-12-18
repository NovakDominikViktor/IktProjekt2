// UpdateConfirmation.js
import React from 'react';

const UpdateConfirmation = ({ fields, onFieldChange, onConfirm, onCancel, userAccessId }) => {
  console.log('Fields:', fields); // Új sor hozzáadva

  return (
    <div className="update-confirmation">
      <p>Update the following fields:</p>

      <label>
        Product Name:
        <input
          type="text"
          value={fields.productName}
          onChange={(e) => onFieldChange('productName', e.target.value)}
        />
      </label>

      <label>
        Product Brand:
        <input
          type="text"
          value={fields.productBrand}
          onChange={(e) => onFieldChange('productBrand', e.target.value)}
        />
      </label>

      <label>
        Instructions:
        <input
          type="text"
          value={fields.instructions}
          onChange={(e) => onFieldChange('instructions', e.target.value)}
        />
      </label>

      <label>
        Price:
        <input
          type="text"
          value={fields.price}
          onChange={(e) => onFieldChange('price', e.target.value)}
        />
      </label>

      <label>
        URL:
        <input
          type="url"
          value={fields.imageUrl}  
          onChange={(e) => onFieldChange('imageUrl', e.target.value)}
        />
      </label>

      <br/>

      <br/>

      <button
        onClick={onConfirm}
        className="btn btn-primary"
        disabled={userAccessId !== 3}
      >
        Yes, Update
      </button>

      <button onClick={onCancel} className="btn btn-secondary">
        Cancel
      </button>
    </div>
  );
};

export default UpdateConfirmation;
