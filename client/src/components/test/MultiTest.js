import React from 'react';
import './test.css';
import WrappedLink from '../wrappedLink/WrappedLink';

const MultiTest = (props) => {
  return (
    <ul className='test-item'>
      {
        props.test.answer.map((a, j) => (
          <li key={j}><input type='checkbox' name={a._id} id={a._id} value={a.mark}/><label htmlFor={a._id}>{a.choice}</label></li>
        ))
      }
    </ul>
  );
}

export default MultiTest;
