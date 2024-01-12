import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CreateProductForm from '../components/CreateProductForm';

function CreateProducts({ loggedInUser }) {
  const [formData, setFormData] = useState({
    productName: '',
    productBrand: '',
    instructions: '',
    price: '',
    accessId: '',
    imageUrl: '',
  });

  const [isModalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'https://localhost:7227/Product';

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);

      if (data.isSuccess) {
        console.log('Product added successfully');
        setFormData({
          productName: '',
          productBrand: '',
          instructions: '',
          price: '',
          accessId: '',
          imageUrl: '',
        });
        window.location.reload();
      } else {
        console.error('Failed to add product:', data.message);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    } finally {
      setModalOpen(false);
    }
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const isAccessId3 = loggedInUser && loggedInUser.accessId === 3;

  return (
    <div>
      {isAccessId3 && (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenModal}
          >
            Open Create Products Modal
          </Button>

          <Modal
            open={isModalOpen}
            onClose={handleCloseModal}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
              <CreateProductForm
                {...formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default CreateProducts;
