import React from "react";
import styled from "styled-components";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar"

const StyleParis = styled.div`
background-color: #f1f1f1;
display: block;
float: right;
height: 300px;
width: 70%;
padding: 20px;
box-sizing: border-box;
`

export default function Paris() {
    return(
        <div>
            <Header />
            <Navbar />
            <StyleParis>
            <h1>Paris</h1>
            <p>Paris, its all about the fun.</p>
            <p>Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, fashion, gastronomy, science, and arts. </p>
            </StyleParis>

            <Footer />
        </div>
    )
}