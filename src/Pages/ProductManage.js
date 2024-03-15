import React, { useState } from 'react'
import './ProductManage.css'
import { Button, Form, Modal, ModalBody } from 'react-bootstrap';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const initialProductState = {
  name: '',
  category: '',
  price: '',
  stockQuantity: ''
};

const ProductManage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category 1', price: 10, stockQuantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 20, stockQuantity: 200 },
    { id: 3, name: 'Product 1', category: 'Category 1', price: 10, stockQuantity: 100 },
    { id: 4, name: 'Product 2', category: 'Category 2', price: 20, stockQuantity: 200 },
    { id: 5, name: 'Product 1', category: 'Category 1', price: 10, stockQuantity: 100 },
    { id: 6, name: 'Product 2', category: 'Category 2', price: 20, stockQuantity: 200 }
    // Add more dummy data as needed
  ]);


  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [formData, setFormData] = useState(initialProductState);
  const [selectedProductId, setSelectedProductId] = useState(null);
  

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setFormData(initialProductState);
  };

  const handleShowAddModal = () => setShowAddModal(true);
 

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedProductId(null);
    setFormData(initialProductState);
  };


  const handleShowUpdateModal = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    setSelectedProductId(productId);
    setFormData(selectedProduct);
    setShowUpdateModal(true);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = () => {
    setProducts([...products, { ...formData }]);
    handleCloseAddModal();
  };


  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    alert("Deleted Sucessfully...")
  };

  const handleUpdateProduct = () => {
    const updatedProducts = products.map(product => {
      if (product.id === selectedProductId) {
        return { ...formData, id: selectedProductId };
      }
      return product;
    });
    setProducts(updatedProducts);
    handleCloseUpdateModal();
  };

  return (
    <>
      <div className='head'>
        <h2>Product List</h2>
        <button onClick={handleShowAddModal}><h6><b>Add products...</b></h6></button>
        
        
      </div>
      <div className='table-div'>
      <table className='Main-table ' striped bordered >
          <thead>
            <tr>
              <th className='ps-3'>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>StockQuantity</th>
              <th>Action</th>
            </tr>
            
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className='ps-3'>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.stockQuantity}</td>
                <td >
                  <button className='dbtn' onClick={() => handleDeleteProduct(product.id)}>
                    <b>Delete</b>
                    
                  </button><i className='icon' onClick={() => handleDeleteProduct(product.id)}><MdDelete /></i>&nbsp;
                  <button className='ubtn' onClick={() => handleShowUpdateModal(product.id)}>
                    <b>Update</b>
                    
                  </button><i  className='icon' onClick={() => handleShowUpdateModal(product.id)}><CiEdit /></i>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={showAddModal}   onHide={handleCloseAddModal} >
      <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form >
         <Form.Group >
                  <Form.Label className='w-25' controlId="productID">Id</Form.Label>
                        <Form.Control className='w-100 ' type='Number' placeholder="Enter product name" name="id" value={formData.id} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group >
                  <Form.Label className='w-25' controlId="producName">Name:</Form.Label>
                        <Form.Control className='w-100' type='text' placeholder="Enter product category" name="name" value={formData.name} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group >
                  <Form.Label className='w-25' controlId="productCategory">Category</Form.Label>
                        <Form.Control className='w-100 ' type='text' placeholder="Enter product price" name="category" value={formData.category} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group >
                  <Form.Label className='w-25' controlId="productPrice">Price</Form.Label>
                        <Form.Control className='w-100 ' type='Number' placeholder="Enter product price" name="price" value={formData.price} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group >
                  <Form.Label className='w-25' controlId="productStock">Stock</Form.Label>
                        <Form.Control className='w-100' type='Number' placeholder="Enter product stock quantity" name="stockQuantity" value={formData.stockQuantity} onChange={handleInputChange} />
                    </Form.Group>
                   
                    
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>Cancel</Button>
          <Button variant="primary" onClick={handleAddProduct}>Add</Button>
        </Modal.Footer>
      
      </Modal>


      {/* Update Modal */}
      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
      <Modal.Body>
         <Form >
         <Form.Group >
                  <Form.Label className='w-25' controlId="productID">Id</Form.Label>
                        <Form.Control className='w-100 ' type='text' value={formData.id} disabled />
                    </Form.Group>
                    <Form.Group >
                  <Form.Label className='w-25' controlId="producName">Name:</Form.Label>
                        <Form.Control className='w-100 ' type='text' placeholder="Enter product category" name="name" value={formData.name} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group >
                  <Form.Label className='w-25' controlId="productCategory">Category</Form.Label>
                        <Form.Control className='w-100 ' type='text' placeholder="Enter product price" name="category" value={formData.category} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group >
                  <Form.Label className='w-25' controlId="productPrice">Price</Form.Label>
                        <Form.Control className='w-100 ' type='Number' placeholder="Enter product price" name="price" value={formData.price} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group >
                  <Form.Label className='w-25' controlId="productStock">Stock</Form.Label>
                        <Form.Control className='w-100 ' type='Number' placeholder="Enter product stock quantity" name="stockQuantity" value={formData.stockQuantity} onChange={handleInputChange} />
                    </Form.Group>
                   
                    
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdateModal}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdateProduct}>update</Button>
        </Modal.Footer>

      </Modal>
      

      

    </>
  )
}

export default ProductManage