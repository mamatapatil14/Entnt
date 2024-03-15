import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FiAlignJustify } from "react-icons/fi"
import { FiXCircle } from "react-icons/fi";
import { NavLink } from 'react-bootstrap';

class Navbar extends Component {
    state={clicked:false,activeLink: '/'};

    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    handleLinkClick = (link) => {
        this.setState({ activeLink: link });
    }
    render(){
       
   return (
    <>
        <nav id='Main-nav' >
            <div className='logo'>
                <h2>Erp System</h2>
            </div>
            <div className='Menue-Link'>
                <ul id='navbar' className={this.state.clicked?"#navbar active":"navbar"} >
                    <li>
                        <Link  to='/' className={`link ${this.state.activeLink === '/' ? 'active' : ''}`} onClick={() => this.handleLinkClick('/')}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/ProductManag' className={`link ${this.state.activeLink === '/ProductManag' ? 'active' : ''}`} onClick={() => this.handleLinkClick('/ProductManag')}>Product Management</Link>
                    </li>
                    <li>
                        <Link to='/OrderManag' className={`link ${this.state.activeLink === '/OrderManag' ? 'active' : ''}`} onClick={() => this.handleLinkClick('/OrderManag')}>Order Management</Link>
                    </li>
                    <li>
                        <Link to='/CalenderDateView' className={`link ${this.state.activeLink === '/CalenderDateView' ? 'active' : ''}`} onClick={() => this.handleLinkClick('/CalenderDateView')}>OrderDate View</Link>
                    </li>
                    

                </ul>

            </div>
            <div id="mobile" onClick={this.handleClick}>
            <i id='bar'>{this.state.clicked?<FiXCircle/>:<FiAlignJustify/>}</i>
            </div>
        </nav>
    </>




  )
}}

export default Navbar