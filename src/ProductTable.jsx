import React, { useState } from 'react';
import { deleteProduct, getProducts } from './Services/ProductService';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductTable() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await getProducts(); // Assuming getProducts returns a promise
      setProducts(fetchedProducts); // Update state with fetched products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const handleToDelete = async(id)=>{
    await deleteProduct(id);
    fetchProducts();
    
    }
  return (
    <center>
    <div className="container mt-4">
      <h2>Product List</h2>
      <button className="btn btn-primary mb-3" onClick={fetchProducts}>
        Fetch Products
      </button>      
      <table className="table table-striped table-hover table-bordered" >

      <thead className='table-dark'>
      <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <img 
                      src={`/images/${product.image}`} 
                     alt={product.name} 
                    style={{ width: '50px', height: '50px' }}
                  />
                </td>
                {/* <button className='btn btn-success' onClick={() => handleUpdateProduct(product)}>Update</button> */}
                <button className='btn btn-danger' onClick={() => handleToDelete(product.id)}>Delete</button>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No products available</td>
              </tr>
          )}
        </tbody>
      </table>
    </div>
    </center>
  );
}

export default ProductTable;
