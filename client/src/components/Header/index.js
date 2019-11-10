import React, { Component } from 'react'
import './Header.css'

import Navbar from 'react-bootstrap/Navbar'


export default class componentName extends Component {
  render() {
    return (
      <header className="Header">
        <Navbar>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}
