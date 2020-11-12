import React from 'react';
import classes from './PasswordInput.module.css';
//import SignUpButton from './SignUpButton';

const PasswordInput = props => {

  return (
    <div>
    <input 
      id={classes.pass} 
      value={props.passInput} 
      onChange={event => props.setPassInput(event.target.value)} />
      <div id={classes.pass_error}></div>
    </div>
  );
};

export default PasswordInput;