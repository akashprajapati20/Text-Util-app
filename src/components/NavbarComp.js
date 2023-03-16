import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';




export default class Navbarcomp extends Component {
  render() {
    return ( 
      <div>
        <Navbar collapseOnSelect expand="lg" bg={`${this.props.mode}`}variant={`${this.props.mode}`}>
      <Container >
        <Navbar.Brand href="/">Text Util App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">{this.props.title2}</Nav.Link>
            {/* <Nav.Link href="/about">About</Nav.Link> */}
            <Nav.Link>  
             <Link to="/about" style={{color:'black'}}>About </Link>

            </Nav.Link>
          </Nav>
          <Nav>
                      <div className={`form-check form-switch text-${this.props.mode==='light'?'dark':'light'} `}>
              <input onClick={this.props.toggleMode} className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }
}
