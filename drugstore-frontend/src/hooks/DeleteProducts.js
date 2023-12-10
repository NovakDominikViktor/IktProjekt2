import React, { useState } from 'react';
import DeleteConfirmation from '../components/DeleteConfirmation';

const DeleteProduct = ({ id, updateProductState, loggedInUser }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);


  const handleDelete = async () => {
    // Call the API to delete the product with the given id
    try {
      await fetch(`https://localhost:7227/Product/${id}`, {
        method: 'DELETE',
      });

      // If the deletion is successful, update the product state in the parent component
      updateProductState();
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      // Close the confirmation dialog
      setShowConfirmation(false);
    }
  };

  return (
    <div>
      <button className="btn btn-danger m-2" onClick={() => setShowConfirmation(true)} disabled={loggedInUser.accessId !== 3}>
        Delete
      </button>

      {showConfirmation && (
        <DeleteConfirmation onConfirm={handleDelete} onCancel={() => setShowConfirmation(false)} />
      )}
    </div>
  );
};

export default DeleteProduct;