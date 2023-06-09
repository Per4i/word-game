import React, { useState, useEffect, useMemo } from 'react';
import EnglishWords from './EnglishWords';
import RusWords from './RussianWords';
import styles from './WordPairs.module.css'
import ButtonRefresh from './ButtonRefresh';


const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const WordPairs = (props) => {
  const [matchedPairs, setMatchedPairs] = useState(props.matchedPairs);
  const [selectedRussianWord, setSelectedRussianWord] = useState('');
  const [selectedEnglishWord, setSelectedEnglishWord] = useState('');
  const [guessCounter, setGuessCounter] = useState(0);

  const russianWords = useMemo(() => shuffle(matchedPairs.map(pair => pair.rus)), [matchedPairs]);
  const englishWords = useMemo(() => shuffle(matchedPairs.map(pair => pair.eng)), [matchedPairs]);

  useEffect(() => {
    const matchingPair = matchedPairs.find(
      pair => pair.rus === selectedRussianWord && pair.eng === selectedEnglishWord
    );
    if (matchingPair) {
      setGuessCounter(prevCounter => prevCounter + 1);
      setSelectedRussianWord('');
      setSelectedEnglishWord('');
      setMatchedPairs(matchedPairs.filter(
        pair => pair.rus !== selectedRussianWord && pair.eng !== selectedEnglishWord
      ));
    } 
  }, [selectedRussianWord, selectedEnglishWord, matchedPairs, setGuessCounter]);
  
  const handleRussianWordClick = (word) => {
    setSelectedRussianWord(word);
  };
  
  const handleEnglishWordClick = (word) => {
    setSelectedEnglishWord(word);
  };
  
  return (
    <div>
      <div className = {styles.container}>
          <RusWords russianWords={russianWords} handleRussianWordClick={handleRussianWordClick} selectedRussianWord = {selectedRussianWord} />
          <EnglishWords englishWords={englishWords} handleEnglishWordClick={handleEnglishWordClick} selectedEnglishWord = {selectedEnglishWord} />
          </div>
          <div className= {styles.container2}>
            <div className= {styles['guess-counter']}>
              {guessCounter > 0 && <p>Количество угаданных пар: {guessCounter}</p>}
            </div>
            <ButtonRefresh/>
          </div> 
      
    </div>
  );
};

export default WordPairs;
