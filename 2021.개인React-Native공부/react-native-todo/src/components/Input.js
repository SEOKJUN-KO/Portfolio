import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const StyledInput = styled.TextInput`
    background-color: ${({theme}) => theme.itemBackground};
    width: ${({width}) => width - 40}px;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 25px;
    color: ${({theme}) => theme.text};
`;

const Input = ({placeholder}) => {
    const width = Dimensions.get('window').width;
    
    return (<StyledInput width={width} placeholder={placeholder}></StyledInput>);
};

export default Input;