import React from "react";
import styled from "styled-components";


const StyleHeader = styled.div`
background-color: #666;
padding: 30px;
text-align: center;
font-size: 35px;
color: white;
`

export default function Header(){
    return(
        <StyleHeader>
            <h1>Header</h1>
        </StyleHeader>
    )
}

