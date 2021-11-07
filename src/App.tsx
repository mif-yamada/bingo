import React from 'react';
import './App.css';
import { Button } from './component/button';
import { Card } from './component/card';

function App() {
  return (
    <div className="App">
      <Button title='bingo' onClick={() => { }}></Button>
      <Card cardNumberList={[[1,2,3,4,5],[11,12,13,14,15],[21,22,23,24,25],[31,32,33,34,35],[41,42,43,44,45],]}></Card>
    </div>
  );
}

export default App;
