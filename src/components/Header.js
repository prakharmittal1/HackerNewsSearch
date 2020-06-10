import React from 'react';
import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';
import {ReactComponent as HomeLogo} from './home.svg';

export class Header extends React.Component {

  render(){
    return (
      <div>
        <Navbar className="color-nav" variant="light">
        <HomeLogo />
          <Navbar.Brand className="brandname">HackerNews Portal</Navbar.Brand>
          <Nav.Link className="justify-content-end" href="#home">Help</Nav.Link>
        </Navbar>
        </div>
    )
  }
}