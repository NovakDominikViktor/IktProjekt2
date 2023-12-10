import React from 'react';

const DeleteConfirmation = ({ onConfirm, onCancel, userAccessId }) => {
  return (
    <div className="delete-confirmation">
      <p>Are you sure you want to delete this item?</p>
      <button
        onClick={onConfirm}
        className="btn btn-danger"
        disabled={userAccessId !== 3}
      >
        Yes, Delete
      </button>
      <button onClick={onCancel} className="btn btn-secondary">
        Cancel
      </button>
    </div>
  );
};

export default DeleteConfirmation;