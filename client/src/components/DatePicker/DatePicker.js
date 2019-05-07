import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {Dropdown, DropdownToggle, DropdownMenu, dropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem, Card } from 'reactstrap';


import 'react-datepicker/dist/react-datepicker.css';

class DatePicker extends Component {

    constructor (props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (date) {
        this.setState({
            startDate: date
        })
    }
    handleSubmit (e) {
        e.preventDefault();
        let main = this.state.startDate
        console.log(main.format('L'));
    }
    render () {
        return (
            <Form>
                <FormGroup>
                    <FormText color="muted">
                        <Label>Date of Birth</Label>
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        Select Month / Date / Year:
                    </Label>
                    <Input onSubmit={this.handleSubmit}>
                        <div className="dob_div">
                            <label> Select Date: </label>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                name="dateOfBirth"
                                dateFormat="MM/DD/YYYY"
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success">Select Date</button>
                        </div>
                </FormGroup>
                </div>
            </FormText >
        );
    }
}

export default DatePicker;