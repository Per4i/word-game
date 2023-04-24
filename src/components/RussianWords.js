import styles from './RussianWords.module.css';
import WordItem from './WordItem';

const RussianWords = (props) => {
  return (
    <ul className={styles.list}>
      {props.russianWords.map((word, index) => (
        <WordItem key={index} word={word} handleClick={() => props.handleRussianWordClick(word)} />
      ))}
    </ul>
  );
}

export default RussianWords;
