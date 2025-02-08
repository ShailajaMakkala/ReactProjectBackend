import React, { useRef } from 'react';
import { saveProduct } from './Services/ProductService';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductForm() {
  const nameRef = useRef();
  const quantityRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const JsonPayload = {
      name: nameRef.current.value,
      quantity: parseInt(quantityRef.current.value),
      price: parseFloat(priceRef.current.value),
      category: categoryRef.current.value,
      image: imageRef.current.files[0].name,
    };
    saveProduct(JsonPayload);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '600px' }}>
        <h2 className="text-center mb-4">Add New Product</h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">Product Name:</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              ref={nameRef}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="productQuantity" className="form-label">Product Quantity:</label>
            <input
              type="number"
              className="form-control"
              id="productQuantity"
              ref={quantityRef}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">Product Price:</label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              ref={priceRef}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">Product Category:</label>
            <input
              type="text"
              className="form-control"
              id="productCategory"
              ref={categoryRef}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">Product Image:</label>
            <input
              type="file"
              className="form-control"
              id="productImage"
              ref={imageRef}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
