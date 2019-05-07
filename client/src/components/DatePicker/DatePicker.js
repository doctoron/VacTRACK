import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import moment from 'moment';


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
                    <Label for="dobDate">Date of Birth</Label>
                    <Input
                        type="date"
                        name="date"
                        id="dobDate"
                        placeholder="date placeholder"
                    />
                </FormGroup>
            </Form>
        )
    }
}


export default DatePicker;