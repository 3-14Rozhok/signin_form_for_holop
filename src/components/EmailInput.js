import React from 'react';
import classes from './EmailInput.module.css';


const EmailInput = props => {
  
  const emailChangeHandler = value => {
    props.setEmail(`${value}`);
  }; 

  return (
    <div>
      <input 
      id={classes.email} 
      value={props.emailInput} 
      onChange={event => emailChangeHandler(event.currentTarget.value)} />
    </div>
  );
};

export default EmailInput;