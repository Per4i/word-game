import styles from './WordItem.module.css'
import WordItem from './WordItem';
const EnglishWords = (props) => {
  return (
    <ul className={styles.list}>
      {props.englishWords.map((word, index) => (
        <WordItem 
        key={index} 
        word={word} 
        handleClick={() => props.handleEnglishWordClick(word)}
        className={`${styles["wordCSS"]} ${word === props.selectedEnglishWord ? styles.selected : ''}`} />
      ))}
    </ul>
  );
}

export default EnglishWords;