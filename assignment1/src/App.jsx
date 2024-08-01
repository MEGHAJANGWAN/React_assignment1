import { useState } from 'react';
import './App.css'
import Button from './components/Button/Button';
import Person from './components/Person/Person'
import Header from './components/Header/Header';
import List from './components/List/List';

function App() {
      const [text, setText] = useState("");

       function btnClicked() {
         setText("Hello User");
       }

  return (
    <>
      <Header title="I am loving it" />
      <Person name="Megha" age="24" />
      <Button text={text} click={btnClicked} />
      <List items="Orange" />
      <List items="Apple" />
      <List items="Grapes" />
    </>
  );
}

export default App
