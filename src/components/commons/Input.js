import React from 'react';
import Label from "./Label";

const Input = props => {
    return <>
        <Label>{props?.label}</Label>
        <input {...props}/>
    </>
};
export default Input
