import React, {Component } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import {ReactComponent as HomeLogo} from './components/home.svg';

export default class HeaderComponent extends React.Component {

  render(){
    return (
      <div>
        <Navbar className="color-nav" variant="light">
        <HomeLogo />
          <Navbar.Brand className="brandname">HackerNews Portal</Navbar.Brand>
          <Nav.Link className="justify-content-end" href="#home">Help</Nav.Link>
        </Navbar>
        <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Navbar.Text>Search</Navbar.Text>
            <NavDropdown title="Stories" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Stories</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Comments</NavDropdown.Item>
      </NavDropdown>
      <Navbar.Text>by</Navbar.Text>
          <NavDropdown title="Popularity" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Popularity</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Date</NavDropdown.Item>
      </NavDropdown>
      <Navbar.Text>for</Navbar.Text>
      

      {/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
  </Dropdown> */}

      <NavDropdown title="All Time" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">All time</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Last 24h</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Past Week</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Past Month</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Past Year</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Custom Range</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search stories by title, url or author" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

      </div>

    )
  }
}