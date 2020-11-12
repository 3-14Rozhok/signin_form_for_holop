import React from 'react';
import classes from './DeleteUsers.module.css';

const DeleteUsers = props => {
  return (
    <button 
    id={classes.button} 
    onClick={event => props.onclick()}>
    Delete All
    </button>
  );
};

export default DeleteUsers;