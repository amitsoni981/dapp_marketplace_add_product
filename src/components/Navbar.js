import React, { Component } from 'react';
import TestApp from "./TestApp";

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-light fixed-top bg-light flex-md-nowrap p-0 shadow">
                <a
                    className="navbar-brand col-sm-3 col-md-2 mr-0"
                    href="http://www.dappuniversity.com/bootcamp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Jayant
                </a>
                <TestApp account={this.props.account}/>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                        <small className="text-white"><span id="account">MyAccount - {this.props.account}</span></small>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
