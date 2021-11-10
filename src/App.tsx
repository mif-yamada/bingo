import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from './component/button';
import { Card } from './component/card';
import { createRandomCardNumList } from './utils/createCard';
import { noDuplicationRandomNum } from './utils/random';

const App: React.FC = () => {
  const [ball, setBall] = useState<number>(0);
  const [ballNumList, setBallNumList] = useState<number[]>([0]);
  const [lostAllBall, setLostAllBall] = useState<boolean>(false);
  const [cardList, setCardList] = useState<number[][]>([]);
  const [strCardList, setSterCardList] = useState([]);

  // useEffect = () => {
  //   const initCard = createRandomCardNumList();

  // }
  const getBall = () => {
    //カードチェックし、穴を開ける
    if (ballNumList.length < 76) {
      const ballNum = noDuplicationRandomNum(1, 75, ballNumList);
      setBall(ballNum);
      setBallNumList(ballNumList.concat(ballNum));
      console.log(`${ball},${ballNumList}`)
    } else {
      setLostAllBall(true);
    }
  };



  return (
    <div className="App">
      <Button title='bingo' onClick={() =>getBall()}></Button>
      <Card cardNumberList={strCardList}></Card>
    </div>
  );
}

export default App;
