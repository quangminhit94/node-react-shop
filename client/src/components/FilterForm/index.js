import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './FilterForm.css'


export default class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="FilterForm">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicText">
            <Form.Label>Movie Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Movie Name" value={this.state.value} onChange={this.handleChange} />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Filter
          </Button>
        </Form>
      </div>
    );
  }
}