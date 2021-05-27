import React from 'react';
import './test.css';
import WrappedLink from '../wrappedLink/WrappedLink';

const SingleTest = (props) => {
  return (
    <ul className='test-item'>
      {
        props.test.answer.map((a, j) => (
          <li key={j}><input type='radio' name={props.test._id} id={a._id} value={a.mark}/><label htmlFor={a._id}>{a.choice}</label></li>
        ))
      }
    </ul>
  );
}

export default SingleTest;
