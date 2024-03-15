import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import {
  ResponsiveContainer, XAxis, YAxis, Legend, Tooltip,
   LineChart, Line
} from 'recharts'

import './Dashboard.css'
import { TiClipboard } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const data = [
  {
    name: 'Product1',
    Total:25,
    sells: 10

  },
  {
    name: 'Product 2',
    Total:20,
    sells: 18

  },
  {
    name: 'Product3',
    Total:15,
    sells: 10

  },
  {
    name: 'Product4',
    Total:20,
    sells: 13

  },
  {
    name: 'Product5',
    Total:30,
    sells: 15

  },
  {
    name: 'Product6',
    Total:20,
    sells: 18

  },
  {
    name: 'Product7',
    Total:25,
    sells: 18

  },
  {
    name: 'Product8',
    Total:30,
    sells: 13

  },
 
  
]


const Dashboard = () => {
  const navigate=useNavigate()
  
  return (
    <div className='DashDiv'>
      <Container fluid className='Dashboard_second_Container'>
        <Row>
          <Col sm={12} md={6} lg={8}>
            <div style={{ padding: 10 }} className='linechart-container'>
              <span><h5 className='analysis'>Real Time Analysis</h5></span>
              <ResponsiveContainer width='100%' aspect={2}>
                <LineChart data={data} className='linechart'>
                  <XAxis dataKey="name" interval={'preserveStartEnd'} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type='monotone' dataKey="Total" stroke='red' />
                  <Line dataKey="sells" type='monotone' stroke='green' />

                </LineChart>

              </ResponsiveContainer>
            </div>
          </Col>
          <Col sm={10} md={6} lg={3} className="second_col">

            <Row >
              <div className='tot_pro'>
                <h5>Total Products</h5>
                <h4>60</h4>
              </div>
            </Row>
            <Row  className='pt-4'>
              <div className='tot_pro'>
                <h5>Total Orders</h5>
                <h4>40</h4>
              </div>
            </Row>
            <Row  className='pt-4'>
              <div className='tot_pro'>
                <h5>Total Customer</h5>
                <h4>70</h4>
              </div>
            </Row>
            <div>
              <button  onClick={() => navigate("/ProductManag")} className='probtn'><i className='dashicon'><TiClipboard/></i>&nbsp;Product Management</button>
            </div>
            <div>
              <button  onClick={() => navigate("/OrderManag")}  className='ordbtn'><i className='dashicon'><FaShoppingCart/></i>&nbsp;Order Management</button>
            </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard