import React, { useState } from 'react';

function UpdateProductModal(props) {
  const [formData, setFormData] = useState({
    productName: props.productName,
    productBrand: props.productBrand,
    instructions: props.instructions,
    price: props.price,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:7227/products/${props.id}`;

    await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    alert('Product updated successfully');
    props.updateProductState();
    props.closeModal(); 
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <label>
            Product Name:
            <input type="text" name="productName" value={formData.productName} onChange={handleChange} />
          </label>
          <br />

          <label>
            Product Brand:
            <input type="text" name="productBrand" value={formData.productBrand} onChange={handleChange} />
          </label>
          <br />

          <label>
            Instructions:
            <input type="text" name="instructions" value={formData.instructions} onChange={handleChange} />
          </label>
          <br />

          <label>
            Price:
            <input type="text" name="price" value={formData.price} onChange={handleChange} />
          </label>
          <br />

          <button type="submit">Update Product</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProductModal;
