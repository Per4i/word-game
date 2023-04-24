import React from 'react';
import WordPairs from './components/WordPairs';

const App = () => {
  const matchedPairs = [
    
    {rus: 'яблоко', eng: 'apple'},
    {rus: 'дом', eng: 'house'},
    {rus: 'солнце', eng: 'sun'},
    {rus: 'человек', eng: 'man'},
    {rus: 'номер', eng: 'number'},
    {rus: 'красный', eng: 'red'},
    {rus: 'собака', eng: 'dog'},
    {rus: 'машина', eng: 'car'},
    // {rus: 'вода', eng: 'water'},
    // {rus: 'деньги', eng: 'money'},
    // {rus: 'страна', eng: 'country'},
    // {rus: 'дерево', eng: 'tree'},
    // {rus: 'школа', eng: 'school'},
    // {rus: 'здание', eng: 'building'},
    // {rus: 'земля', eng: 'earth'},
    // {rus: 'молоко', eng: 'milk'},
    // {rus: 'носок', eng: 'sock'},
    // {rus: 'кран', eng: 'crane'},
    // {rus: 'мышь', eng: 'mouse'},
    // {rus: 'друг', eng: 'friend'}
  ];

  return (
    <div>
      <WordPairs matchedPairs={matchedPairs} />
    </div>
  );
};

export default App;


// теперь надо сделать так, чтоб массив подгружался динамически