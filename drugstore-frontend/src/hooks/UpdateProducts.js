// UpdateProduct.js
import React, { useState } from 'react';
import UpdateConfirmation from '../components/UpdateConfirmation';

const UpdateProduct = ({ id, productName, productBrand, instructions, price, updateProductState, loggedInUser }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [fields, setFields] = useState({
    productName,
    productBrand,
    instructions,
    price,
  });

  const handleUpdate = async () => {
    // Call the API to update the product with the given id and fields
    try {
      await fetch(`https://localhost:7227/Product/${id}`, {
        method: 'PUT',
        body: JSON.stringify(fields),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // If the update is successful, update the product state in the parent component
      updateProductState();
    } catch (error) {
      console.error('Error updating product:', error);
    } finally {
      // Close the confirmation dialog
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
