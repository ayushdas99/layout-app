import React from "react";
import styled from "styled-components";


const StyleContent = styled.div`
display: block;
float: right;
padding: 20px;
width: 70%;
background-color: #f1f1f1;
height: 300px;
box-sizing: border-box;
`

export default function Content() {
    return(
        <StyleContent>
            <h1>London</h1>
            <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a
                    metropolitan area of over 13 million inhabitants.</p>
                <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going
                    back to its founding by the Romans, who named it Londinium.</p>
        </StyleContent>
    )
}