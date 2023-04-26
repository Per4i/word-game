import styles from './WordItem.module.css'
import WordItem from './WordItem';

const RussianWords = (props) => {
  return (
    <ul className={styles.list}>
      {props.russianWords.map((word, index) => (
        <WordItem
        className={`${styles["wordCSS"]} ${word === props.selectedRussianWord ? styles.selected : ''}`}
          key={index}
          word={word}
          handleClick={() => props.handleRussianWordClick(word)}
        />
      ))}
    </ul>
  );
}

export default RussianWords;
