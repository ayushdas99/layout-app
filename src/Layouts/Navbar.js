import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const StyleNavbar = styled.div`
display: flex;
float: left;
width: 30%;
height: 300px;
background: #ccc;
padding: 20px;
box-sizing: border-box;
`

export default function Navbar() {
    return(
        
        <StyleNavbar>
            <ul>
                <li><Link to="/Paris">Paris</Link></li>
                <li><Link to="/Bengaluru">Bengaluru</Link></li>
                <li><Link to="/NewYork">New York</Link></li>
                
            </ul>
        </StyleNavbar>
        
        
    )
}