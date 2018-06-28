import React, { Component } from 'react';
import Clock from './Clock.js';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deadline: 'December 25, 2018',
            newDeadline: '',
        }
    }

    changeDeadline() {
        this.setState({ deadline: this.state.newDeadline });
    }

    render() {
        return (
            <div className="app">
                <div className="app-title">{this.state.deadline}</div>
                <Clock
                    deadline={this.state.deadline}
                />
                <Form inline={true}>
                    <FormControl
                        className="deadline-input"
                        placeholder="new date"
                        onChange={ event => this.setState({newDeadline: event.target.value})}
                    />
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;