import { useState } from "react";
import styles from "./WordItem.module.css";

const WordItem = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    props.handleClick();
  };

  return (
    <button
      className={`${styles.wordPair} ${isActive ? styles.activePair : ""}`}
      onClick={handleClick}
    >
      <div className={styles.word}>{props.word}</div>
    </button>
  );
};

export default WordItem;
