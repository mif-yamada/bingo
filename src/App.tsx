import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from './component/button';
import { Card } from './component/card';
import { createRandomCardNumList } from './utils/createCard';
import { noDuplicationRandomNum } from './utils/random';

const App: React.FC = () => {
  const [ball, setBall] = useState<number>(0);
  const [ballNumList, setBallNumList] = useState<number[]>([0]);

  const getBall = () => {
    if (ballNumList.length < 76) {
      const RandomNum = noDuplicationRandomNum(1, 75, ballNumList);
    }
  };


  return (
    <div className="App">
      <Button title='bingo' onClick={() => { }}></Button>
      <Card cardNumberList={createRandomCardNumList()}></Card>
    </div>
  );
}

export default App;
