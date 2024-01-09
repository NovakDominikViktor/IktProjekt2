import React from 'react';

const UpdateConfirmation = ({ fields, onFieldChange, onConfirm, onCancel, userAccessId }) => {
  console.log('Fields:', fields);

  return (
    <div className="update-confirmation container">
      <p>Update the following fields:</p>

      <div className="form-group">
        <label htmlFor="productName">Product Name:</label>
        <input
          id="productName"
          className="form-control"
          type="text"
          value={fields.productName}
          onChange={(e) => onFieldChange('productName', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="productBrand">Product Brand:</label>
        <input
          id="productBrand"
          className="form-control"
          type="text"
          value={fields.productBrand}
          onChange={(e) => onFieldChange('productBrand', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="instructions">Instructions:</label>
        <input
          id="instructions"
          className="form-control"
          type="text"
          value={fields.instructions}
          onChange={(e) => onFieldChange('instructions', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          className="form-control"
          type="text"
          value={fields.price}
          onChange={(e) => onFieldChange('price', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">URL:</label>
        <input
          id="imageUrl"
          className="form-control"
          type="url"
          value={fields.imageUrl}
          onChange={(e) => onFieldChange('imageUrl', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="accessId">Access:</label>
        <input
          id="accessId"
          className="form-control"
          type="text"
          value={fields.accessId}
          onChange={(e) => onFieldChange('accessId', e.target.value)}
        />
      </div>

      <br />

      <br />

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
