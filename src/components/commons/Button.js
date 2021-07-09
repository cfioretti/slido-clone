import React from 'react';

const Button = props => {
  return <button {...props}>{props.children}</button>;
};
export default Button;
