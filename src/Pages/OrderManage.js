import React, { useState } from 'react'
import './OrderManage.css'
import { Button, Form, Modal, Toast } from 'react-bootstrap'
import { GrView } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const OrderManage = () => {

  const [mockOrders, setMockOrders] = useState([
    { id: 1, customerName: "Mamata Patil ", orderDate: "2024-03-13", status: "Pending" },
    { id: 2, customerName: "Vaishnavi Tyade", orderDate: "2024-03-12", status: "Shipped" },
    { id: 3, customerName: "Pooja Patil", orderDate: "2024-03-11", status: "Delivered" },
    {id: 4, customerName: "Prajkta Sarode", orderDate: "2024-03-11", status: "Delivered"},
    {id: 5, customerName: "Vaishnavi Bharambe", orderDate: "2024-03-11", status: "Shiped" },
    {id: 6, customerName: "Sumit sarode", orderDate: "2024-03-11", status: "Pending"}  
  ]);

  const products=[
    { id: 1, name: 'Product 1', category: 'Category 1', price: 10, stockQuantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 20, stockQuantity: 200 },
    { id: 3, name: 'Product 1', category: 'Category 1', price: 10, stockQuantity: 100 },
    { id: 4, name: 'Product 2', category: 'Category 2', price: 20, stockQuantity: 200 },
    { id: 5, name: 'Product 1', category: 'Category 1', price: 10, stockQuantity: 100 },
    { id: 6, name: 'Product 2', category: 'Category 2', price: 20, stockQuantity: 200 }
  ]
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [showDeleteToast, setShowDeleteToast] = useState(false);


    const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedOrder(null);
  };

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleOpenUpdateModal = (order) => {
    setSelectedOrder(order);
    setShowUpdateModal(true);
  };

  const handleStatusChange = (e) => {
    console.log(e.target.value);
    setNewStatus(e.target.value);
  };

  const handleUpdateStatus = () => {
    console.log(selectedOrder, newStatus); 
    // Update the status of the selected order here
    const updatedOrders = mockOrders.map(order =>
      order.id === selectedOrder.id ? { ...order, status: newStatus } : order
    );
    setMockOrders(updatedOrders);
    handleCloseUpdateModal();
  };


  const handleDeleteOrder = (order) => {
    
    const updatedOrders = mockOrders.filter(o => o.id !== order.id);
    setMockOrders(updatedOrders);
    setShowDeleteToast(true);
    setTimeout(() => setShowDeleteToast(false), 3000); // Hide the toast after 3 seconds
  };

 

  return (
    <div>
      <div className='ordhead'>
        <h3>Order Deatils</h3>
      </div>
      <div className='totalord'><b>(Total orders:&nbsp;{mockOrders.length})</b></div>
      <table className=' maintable table table-striped'>
        <thead>
          <th >Order ID</th>
          <th>Customer Name</th>
          <th>Order Date</th>
          <th>Status</th>
          <th>View</th>
          <th>Update Status</th>
          <th>Delete</th>
      
        </thead> 
        <tbody>
          {mockOrders.map((orders)=>(
            <tr>
              <td className='ps-4'>{orders.id}</td>
              <td>{orders.customerName}</td>
              <td>{orders.orderDate}</td>
              <td>{orders.status}</td>
              <td>
                <Button onClick={() => handleOpenModal(orders)} className='btn'>View</Button>
                <i onClick={() => handleOpenModal(orders)}><GrView /></i>
              </td>
             
              <td>
              <Button onClick={() => handleOpenUpdateModal(orders)} className='btn'>Update status</Button>
              <i onClick={() => handleOpenUpdateModal(orders)}><AiFillEdit /></i>
              </td>
              
              <td>
              <Button onClick={() => handleDeleteOrder(orders)} className='btn'>Delete</Button>
              <i onClick={() => handleDeleteOrder(orders)}><MdDelete /></i>
              </td>
            </tr>

          ))}
        </tbody>    
       </table>

       <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <div>
              <p><b>Order ID:</b> {selectedOrder.id}</p>
              <p><b>Order Date:</b> {selectedOrder.orderDate}</p>
              <p><b>Customer Name:</b> {selectedOrder.customerName}</p>
              <p><b>Status: </b>{selectedOrder.status}</p>
              <p><b>Product ID:</b>435642156</p>
              <p><b>Product Name:</b>Product1</p>
              <p><b>Product Category:</b>Category1</p>
              <p><b>Product Price</b>200/-</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="statusSelect">
              <Form.Label>Select new status:</Form.Label>
              <Form.Control as="select" onChange={handleStatusChange}>
                <option value="Pending">Pending</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdateModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateStatus}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Toast for showing delete message */}
      <Toast show={showDeleteToast} onClose={() => setShowDeleteToast(false)} delay={3000} autohide className='toast'>
        <Toast.Body>Order deleted successfully</Toast.Body>
      </Toast>

    </div>
  )
}

export default OrderManage