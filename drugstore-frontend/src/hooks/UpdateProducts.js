import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import UpdateConfirmation from '../components/UpdateConfirmation';

const UpdateProduct = ({ id, productName, productBrand, instructions, price, imageUrl, accessId, updateProductState, loggedInUser }) => {
  const [fields, setFields] = useState({
    productName,
    productBrand,
    instructions,
    price,
    imageUrl,
    accessId,
  });

  const [isModalOpen, setModalOpen] = useState(false);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://localhost:7227/Product/${id}`, {
        method: 'PUT',
        body: JSON.stringify(fields),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error('Server responded with an error:', response.status, response.statusText);
        return;
      }

      updateProductState();
    } catch (error) {
      console.error('Error updating product:', error);
    } finally {
      setModalOpen(false);
    }
  };

  const handleFieldChange = (fieldName, value) => {
    setFields({ ...fields, [fieldName]: value });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setModalOpen(true)}
        disabled={loggedInUser.accessId !== 3}
      >
        Update
      </Button>

      <Modal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <UpdateConfirmation
            fields={fields}
            onFieldChange={handleFieldChange}
            onConfirm={handleUpdate}
            onCancel={() => setModalOpen(false)}
            userAccessId={loggedInUser.accessId}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateProduct;
