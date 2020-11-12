import React from 'react';
import classes from './RefreshButton.module.css';

const RefreshButton = props => {
  return (
    <button 
    id={classes.button} 
    onClick={event => props.onclick()}>
    <i className="fas fa-redo-alt"></i>
    </button>
  );
};

export default RefreshButton;