import React from 'react';


const WordItem = (props) => {
  return (
    <button className={props.className} onClick={props.handleClick}>
      <div>{props.word}</div>
    </button>
  );
};

export default WordItem;