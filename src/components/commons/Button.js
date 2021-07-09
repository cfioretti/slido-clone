import React from 'react';

const Button = props => {
    return <button onClick={() => props.handleClick('prova', 1)}>{props.children}</button>;
};
export default Button;
