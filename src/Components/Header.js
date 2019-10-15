import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Wiki3000</h1>
                <ul>
                    <li><Link to='/'><button>Home</button></Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/about/contact'>Contact</Link></li>
                </ul>
            </div>
        )
    }
}
