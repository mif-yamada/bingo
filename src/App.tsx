import React from 'react';
import './App.css';
import { Button } from './component/button';
import { Card } from './component/card';
import { createRandomCardNumList } from "./utils/random";

function App() {
  console.log(createRandomCardNumList);
  return (
    <div className="App">
      <Button title='bingo' onClick={() => { }}></Button>
      <Card cardNumberList={[[1,2,3,4,25],[1,2,3,4,35],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],]}></Card>
    </div>
  );
}

export default App;
