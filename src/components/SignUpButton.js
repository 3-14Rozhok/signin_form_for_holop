import React from 'react';
import classes from './SignUpButton.module.css';

const SignUpButton = props => {
  // Pass and Email validation
  // const [ count, setCount ]  = useState(0);

  // const passChangeHandler = value => {
  //   props.setPass(`${value}`);
  //   setCount(2);
  // };


  // const validatePass = (passInput) => {
  //   if(passInput.length > 3) {
  //     return true;
  //   } 
  //   return false;
  // };

  // const validateEmail = (emailInput) => {
  //   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(emailInput);
  // };

  // validateEmail(props.emailInput) && validatePass(props.passInput)
  if(1){
    return (
      <button 
      id={classes.button} 
      onClick={event => props.onclick()}>
      Sign Up
      </button>
    );
  } else {
    return (
      <div>
        <button 
        disabled
        id={classes.button}>
        Sign Up
        </button>
        <div id={classes.email_error}>Invalid e-mail</div>
      </div>
    );
  }
};

export default SignUpButton;