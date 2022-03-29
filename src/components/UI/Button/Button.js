import React from 'react';
import styles from './Button.module.css';
// import styled from 'styled-components';

// attacked template literal (``) is a default JavaScript syntax.
// Things inside backtics will be passed into the method(button()) in a special way,
// and will be executed just like as a method.
// styled.button`` will return a new button component with styles.
// const Button = styled.button`
//   // remove any selectors (.button) inside backticks.
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 765px) {
//     width: auto;
//   }

//   // for seudo-selectors, use &
//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
