import React from "react";
import styled from "styled-components";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";


const StyleNY = styled.div`
background-color: #f1f1f1;
display: block;
float: right;
height: 300px;
width: 70%;
padding: 20px;
box-sizing: border-box;
`

export default function NewYork() {
    return(
        <div>
            <Header />
            <Navbar />
        <StyleNY>
            <h1>New York</h1>
            <p>New York, often called New York City (NYC) to distinguish it from the state of New York, is the most populous city in the United States.</p>
            <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.</p>  
        </StyleNY>
        <Footer />
        </div>
    )
}