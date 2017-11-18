import React from 'react';
import styled from 'styled-components';
import config from '../../config.css';

const Container = styled.span`
    background-color: #EDECE8;
    border-radius: 10px;
    padding: 1px 5px 1px 5px;
    cursor: pointer;    
    margin-right: 3px;
`
const Btn = styled.span`
    color: white;
    margin-left: 10px;
    ${Container}:hover & {
        color: red;
    }
`

const Tag = (props) => {
    return (
        <Container id="att">{props.children}
            <Btn onClick={props.onClick} 
                className="fa fa-times"></Btn>
        </Container>
    )
}

export default Tag;