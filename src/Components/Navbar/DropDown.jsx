import React from 'react'
import './DropCss.css'

const DropDown = () => {
    return (
        
            <nav class="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">Services <i class="caret"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Service 1</a></li>
                            <li><a href="#">Service 2</a></li>
                            <li><a href="#">Service 3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
       
    )
}

export default DropDown
