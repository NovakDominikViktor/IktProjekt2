// DeleteConfirmation.js
import React from 'react';

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="delete-confirmation">
      <p>Are you sure you want to delete this item?</p>
      <button onClick={onConfirm} className="btn btn-danger">
        Yes, Delete
      </button>
      <button onClick={onCancel} className="btn btn-secondary">
        Cancel
      </button>
    </div>
  );
};

export default DeleteConfirmation;
