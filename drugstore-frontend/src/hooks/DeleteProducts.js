import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import DeleteConfirmation from '../components/DeleteConfirmation';

const DeleteProduct = ({ id, updateProductState, loggedInUser }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await fetch(`https://localhost:7227/Product/${id}`, {
        method: 'DELETE',
      });
      updateProductState();
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      setModalOpen(false);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="error"
        onClick={() => setModalOpen(true)}
        disabled={loggedInUser.accessId !== 3}
      >
        Delete
      </Button>

      <Modal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <DeleteConfirmation
            onConfirm={handleDelete}
            onCancel={() => setModalOpen(false)}
            userAccessId={loggedInUser.accessId}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteProduct;
