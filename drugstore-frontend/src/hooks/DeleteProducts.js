import React from 'react';

const DeleteProduct = ({ id, updateProductState }) => {
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
    }
  };

  return (
    <div>
      <button className="btn btn-danger m-2" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteProduct;
