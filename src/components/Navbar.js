import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

export default function Navbar(header) {
    return (
        <div>
            <header class="header">
                <div class="mainnav">

                    <div class="box1">
                        <h1>
                            {header.title}
                        </h1>
                    </div>
                    <div class="box2">
                        <ul>
                            <li><NavLink to="/">HOME</NavLink></li>
                            <li><NavLink to="/About">ABOUT</NavLink></li>
                            <li><NavLink to="/Services">SERVICES</NavLink></li>
                            <li><NavLink to="/Review">REVIEW</NavLink></li>
                            <li><NavLink to="/Contact">CONTACT</NavLink></li>
                        </ul>
                    </div>
                    <div class="box3">
                        <button> Sign In/Up</button>
                    </div>
                </div>

            </header>
        </div>
    )
}
