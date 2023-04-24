import WordItem from "./WordItem";
import styles from "./EnglishWords.module.css"
const EnglishWords = (props) => {
  return (
    <ul className={styles.list}>
      {props.englishWords.map((word, index) => (
        <WordItem key={index} word={word} handleClick={() => props.handleEnglishWordClick(word)} />
      ))}
    </ul>
  );
}

export default EnglishWords;