import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {

    render () {
        return (
            <div className='Navbar'>
            <ul className="navbar">
                <li className="Name">Marli Renee</li>
                <li>Contact</li>
                <li>Work</li>
                <li>About</li>
            </ul>
               
            </div>
        )
    }
}
