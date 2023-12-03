import React, { useState } from 'react';

const UpdateProduct = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    // You can handle the product data here if needed
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="btn btn-primary m-2" onClick={handleOpenModal}>
        Modify
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {/* Render your update form or content here */}
            <button className="btn btn-secondary" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateProduct;
