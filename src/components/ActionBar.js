import React from 'react';
import '../App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export class ActionBar extends React.Component {

    constructor() {
      super();
      this.state = {
        type: 'all',
        criteria: 'popularity',
        timeRange: 'allTime'
      }
  
      this.updateType = this.updateType.bind(this);
      this.updateCriteria = this.updateCriteria.bind(this);
      this.updateTimeRange = this.updateTimeRange.bind(this);
    }
    
    updateType (event) {
      this.setState({
        type : event.target.value
      });
    }
  
    updateCriteria (event) {
      this.setState({
        criteria : event.target.value
      });
    }
  
    updateTimeRange (event) {
      this.setState({
        timeRange : event.target.value
      });
    }
  
    render(){
      return (
        <div>
          
          <Navbar bg="light" variant="light">
            <Nav className="mr-auto">
              
              <Form inline>
                <Form.Label className="mx-3" htmlFor="type">Search</Form.Label>
                <Form.Control as="select" className="my-1 mr-sm-2" value={this.state.type} 
                  name="type" id="type" onChange={this.updateType}>
                  <option value="all">All</option>
                  <option value="stories">Stories</option>
                  <option value="comments">Comments</option>
                </Form.Control>
  
                <Form.Label className="mx-3" htmlFor="criteria">By</Form.Label>
                <Form.Control as="select" className="my-1 mr-sm-2" value={this.state.criteria} 
                  name="criteria" id="criteria" onChange={this.updateCriteria}>
                  <option value="date">Date</option>
                  <option value="popularity">Popularity</option>
                </Form.Control>
  
                <Form.Label className="mx-3" htmlFor="timeRange">For</Form.Label>
                <Form.Control as="select" className="my-1 mr-sm-2" value={this.state.timeRange} 
                  name="timeRange" id="timeRange" onChange={this.updateTimeRange}>
                  <option value="allTime">All time</option>
                  <option value="pastYear">Past Year</option>
                  <option value="pastMonth">Past Month</option>
                  <option value="pastWeek">Past Week</option>
                  <option value="last24">Last 24 Hours</option>
                </Form.Control>
              </Form>
  
            </Nav>
  
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar>
  
        </div>
      )
    }
  }