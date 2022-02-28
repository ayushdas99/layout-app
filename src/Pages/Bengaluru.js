import React from "react";
import styled from "styled-components";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import Navbar from "../Layouts/Navbar";

const StyleBang = styled.div`
background-color: #f1f1f1;
display: block;
float: right;
height: 300px;
width: 70%;
padding: 20px;
box-sizing: border-box;
`

export default function Bengaluru() {
    return(
        <div>
        <Header />
        <Navbar />
        <StyleBang>
            <h1>Bengaluru/Bangalore</h1>
            <p>Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. </p>
            <p>The center of India's high-tech industry, the city is also known for its parks and nightlife.</p>
        </StyleBang>
        <Footer />
        </div>
    )
}