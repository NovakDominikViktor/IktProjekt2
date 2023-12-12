import React from 'react';

export default function CreateProductForm(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="productName" className="form-label">Product Name:</label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={props.productName}
                        onChange={props.handleChange}
                        className="form-control"
                        placeholder="Product Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productBrand" className="form-label">Product Brand:</label>
                    <input
                        type="text"
                        id="productBrand"
                        name="productBrand"
                        value={props.productBrand}
                        onChange={props.handleChange}
                        className="form-control"
                        placeholder="Product Brand"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="instructions" className="form-label">Instructions:</label>
                    <input
                        type="text"
                        id="instructions"
                        name="instructions"
                        value={props.instructions}
                        onChange={props.handleChange}
                        className="form-control"
                        placeholder="Instructions"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={props.price}
                        onChange={props.handleChange}
                        className="form-control"
                        placeholder="Price"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="accessId" className="form-label">Access Level ID:</label>
                    <input
                        type="text"
                        id="accessId"
                        name="accessId"
                        value={props.accessId}
                        onChange={props.handleChange}
                        className="form-control"
                        placeholder="Access Level ID"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="ImageUrl" className="form-label">URL:</label>
                    <input
                        type="text"
                        id="ImageUrl"
                        name="ImageUrl"
                        value={props.ImageUrl}
                        onChange={props.handleChange}
                        className="form-control"
                        placeholder="Image URL"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
