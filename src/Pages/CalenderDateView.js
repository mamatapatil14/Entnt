import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ClenderDateView.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Dummy data representing orders with their expected delivery dates
const ordersData = [
  { id: 1, date: '2022-03-15', products: ['Product A', 'Product B'] },
  { id: 2, date: '2022-03-16', products: ['Product C', 'Product D'] },
  { id: 2, date: '2022-03-13', products: ['Product C', 'Product D','Product E'] },
  { id: 2, date: '2022-03-12', products: ['Product C', 'Product D','Product F','Product A'] },
  // Add more dummy data as needed
];

const CalenderDateView = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [ordersForSelectedDate, setOrdersForSelectedDate] = useState([]);

    

    // Function to handle date selection
  const handleDateSelect = date => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split('T')[0]; // Format date to match order dates
    const orders = ordersData.filter(order => order.date === formattedDate);
    setOrdersForSelectedDate(orders);
  };

  const renderOrders = () => {
    if (ordersForSelectedDate.length === 0) {
      return <h4 className='noord'><b>No orders for {selectedDate.toDateString()}</b></h4>;
    } else {
      return (
        <>
          <h3 className='yesord'>Orders for {selectedDate.toDateString()}</h3>
          <ol>
            {ordersForSelectedDate.map(order => (
              <li key={order.id}>
                <strong>Order ID:</strong> {order.id}<br />
                <strong>Products:</strong> {order.products.join(', ')}
              </li>
            ))}
          </ol>
        </>
      );
    }
  };

  return (
    <div className='cal_div'>
   <Row >
      
      <Col  className="calendar-container">
      <h2 className='cal_h2'>Calendar View</h2>
        <Calendar className='calender'
          onChange={handleDateSelect}
          value={selectedDate}
        />
      </Col>
      <Col  className="orders-list">
        {renderOrders()}
      </Col>
   </Row>
   </div>
  )
}

export default CalenderDateView