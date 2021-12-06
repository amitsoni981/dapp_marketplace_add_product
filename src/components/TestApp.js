import React, { Component } from 'react';
//import Web3 from 'web3';
//import test from 'test3';
//import TestContract from "../abis/TestContract.json";
//import Navbar from './Navbar';
//import Main from './Main';
import SampleComponent from './SampleComponent';

class TestApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'initial',
            id: 123
        }
    }

    print()
    {
        console.log("this is print function");
        let nameval = this.state.name;
        console.log(nameval);
        this.setState({name: "new name"});
    }

    render() {
        return (
            <div>
                <h1>This is - {this.state.name}</h1>
                <h2>account: {this.props.account}</h2>
                <SampleComponent />
            </div>
        );
    }
}

export default TestApp;