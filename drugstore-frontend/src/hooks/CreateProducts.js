import React, { useState } from 'react';
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
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      const url = 'https://localhost:7227/Product';
      e.preventDefault();
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.isSuccess) {
            console.log('Product added successfully');
          
            window.location.reload();
          } else {
            console.error('Failed to add product:', data.message);
          }
        })
        .catch((error) => console.error('Error adding product:', error));
    };
  
    const isAccessId3 = loggedInUser && loggedInUser.accessId === 3;
  
    return (
      <>
        {isAccessId3 && (
          <CreateProductForm
            {...formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </>
    );
  }
  
  export default CreateProducts;