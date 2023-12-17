// UpdateProduct.js
import React, { useState } from 'react';
import UpdateConfirmation from '../components/UpdateConfirmation';

const UpdateProduct = ({ id, productName, productBrand, instructions, price, ImageUrl ,updateProductState, loggedInUser }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [fields, setFields] = useState({
    productName,
    productBrand,
    instructions,
    price,
    ImageUrl,
  });

  const handleUpdate = async () => {
    try {
      await fetch(`https://localhost:7227/Product/${id}`, {
        method: 'PUT',
        body: JSON.stringify(fields),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      updateProductState();
    } catch (error) {
      console.error('Error updating product:', error);
    } finally {
      setShowConfirmation(false);
    }
  };

  const handleFieldChange = (fieldName, value) => {
    setFields({ ...fields, [fieldName]: value });
  };

  return (
    <div>
      <button
        className="btn btn-primary m-2"
        onClick={() => setShowConfirmation(true)}
        disabled={loggedInUser.accessId !== 3}
      >
        Update
      </button>

      {showConfirmation && (
        <UpdateConfirmation
          fields={fields}
          onFieldChange={handleFieldChange}
          onConfirm={handleUpdate}
          onCancel={() => setShowConfirmation(false)}
          userAccessId={loggedInUser.accessId}
        />
      )}
    </div>
  );
};

export default UpdateProduct;
