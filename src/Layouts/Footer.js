import React from "react";
import styled from "styled-components";

const StyleFooter = styled.div`
text-align: center;
color: white;
background-color: #777;
padding-top: 20px;
box-sizing: border-box;
`

export default function Footer() {
    return(
        <StyleFooter>
            <h2>Footer</h2>
        </StyleFooter>
    )
}