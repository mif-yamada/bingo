import React from 'react';
import './App.css';
import { Button } from './component/button';
import { Card } from './component/card';
import { createRandomCardNumList } from "./utils/createCard";
import { createRandomNumberList } from './utils/random';

function App() {
  return (
    <div className="App">
      <Button title='bingo' onClick={() => { }}></Button>
      <Card cardNumberList={createRandomCardNumList()}></Card>
    </div>
  );
}

export default App;
