import React from 'react';
import './App.css';
import { Button } from './component/button';
import { Card } from './component/card';

function App() {
  return (
    <div className="App">
      <Button title='bingo' onClick={() => { }}></Button>
      <Card cardNumberList={[[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],]}></Card>
    </div>
  );
}

export default App;
