import React, { useState } from 'react';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import SignUpButton from '../components/SignUpButton';
import SignInButton from '../components/SignInButton';
import DeleteUsers from '../components/DeleteUsers';
import RefreshButton from '../components/RefreshButton';
//import CheckBox from '../components/CheckBox';
import classes from './SignForm.module.css';
import axios from 'axios';


const SignForm = () => {

  const urlSignUp = 'http://localhost:8000/api/v1/nick';
  const urlSignIn = 'http://localhost:8000/signIn';
  const urlDeleteUsers = 'http://localhost:8000/api/v1/deleteAll';

  const refreshEmail = () => {
    // Generating random email
    let alphabet = 'ABCDEDGHIJKLMNOPQRSTUXYVWZ1234567890', randomEmail = '';
    //abcdefghijklmnopqrstuxywz1234567890_.
    for(let i = 0; i < 7; i++){
      randomEmail += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }
    //randomEmail += '@gmail.com';
    // Write email locally
    localStorage.setItem('email', randomEmail);
    return randomEmail;  
  } 

  const prevEmail = () => {
    // Check if there is old email
    let oldEmail = localStorage.getItem('email') || '';
    // If there is no old email
    if(oldEmail === '') {
      return refreshEmail();
    } else {
      return oldEmail;
    };
  } 

  const [ emailInput, setEmailInput ]  = useState(prevEmail());
  const [ passInput, setPassInput ]  = useState('1234');


  // Refresh handler
  const refresh = () => {
    setEmailInput(refreshEmail());
  }

  // SignUp Handler
  async function signUpHandler() {

    let conf = {
        conf: {
          email: emailInput,
          password: passInput,
          nickname: emailInput,
          data: {
            settings: 0
          }
        }
    };

    await axios.post(urlSignUp, conf)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err)
      });
  };

  // Delete All
  async function deleteUsers () {
    await axios.get(urlDeleteUsers)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err)
      });
  };

  // SignIn Handler
  async function signInHandler() {

    let conf = {
        conf: {
          email: emailInput,
          password: passInput,
        }
    };

    await axios.post(urlSignIn, conf)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err)
      });
  };


  return (
      <div className={classes.form}>
        <EmailInput setEmail={setEmailInput} emailInput={emailInput}/>
        <PasswordInput passInput={passInput} setPassInput={setPassInput}/>
        <SignUpButton onclick={signUpHandler} emailInput={emailInput} passInput={passInput}/>
        <SignInButton onclick={signInHandler}/>
        <DeleteUsers onclick={deleteUsers}/>
        <RefreshButton onclick={refresh}/>
      </div>
    );
  };

export default SignForm;