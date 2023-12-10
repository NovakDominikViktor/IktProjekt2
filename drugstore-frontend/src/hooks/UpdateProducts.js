// UpdateProduct.js
import React, { useState } from 'react';
import UpdateConfirmation from '../components/UpdateConfirmation';

const UpdateProduct = ({ id, productName, productBrand, instructions, price, updateProductState, loggedInUser }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({
    productName,
    productBrand,
    instructions,
    price,
  });

  const handleUpdate = async () => {
    // Call the API to update the product with the given id
    try {
      if (loggedInUser.accessId !== 3) {
        console.log('User is not an admin. Update is disabled.');
        return;
      }
      const response = await fetch(`https://localhost:7227/Product/${id}`, {
        method: 'PUT', // Use the appropriate HTTP method for updating
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFields),
        
      });
  
      if (response.ok) {
        console.log('Product updated successfully');
        // If the update is successful, update the product state in the parent component
        updateProductState();
      } else {
        console.error('Failed to update product:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    } finally {
      // Close the confirmation dialog
      setShowConfirmation(false);
    }
  };

  const handleFieldChange = (field, value) => {
    setUpdatedFields((prevFields) => ({ ...prevFields, [field]: value }));
  };

  return (
    <div>
      <button className="btn btn-primary m-2" onClick={() => setShowConfirmation(true)} disabled={loggedInUser.accessId !== 3}>
        Update
      </button>

      {showConfirmation && (
        <UpdateConfirmation
          fields={updatedFields}
          onFieldChange={handleFieldChange}
          onConfirm={handleUpdate}
          onCancel={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
};

export default UpdateProduct;