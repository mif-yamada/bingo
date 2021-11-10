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
  const [colCheckCardList, setColCheckCardList] = useState<number[][]>([]);

  useEffect(() => {
    const initCard = createRandomCardNumList();
    setCardList(initCard.cardNumList);
    setColCheckCardList(initCard.centerFreeNumList);
  }, []);

  const getBall = () => {
    //カードチェックし、穴を開ける
    if (ballNumList.length < 76) {
      const ballNum = noDuplicationRandomNum(1, 75, ballNumList);
      setBall(ballNum);
      setBallNumList(ballNumList.concat(ballNum));
    } else {
      setLostAllBall(true);
    }
  };

  //斜めリスト
  const crossCheckCardList = [
    [cardList[0][0], cardList[1][1], 0, cardList[3][3], cardList[4][4]],
    [cardList[0][4], cardList[1][3], 0, cardList[3][1], cardList[4][0]],
  ];
  //TODO: bingoreachチェックに使用
  const checkCardNum = (checkList: number[][], ballnum: number) => {
    //.lengthの値で判定
    const checkCount = checkList.map((array, idx, list) => {
      const checkarray: number[] = array.filter((val) => val === ballnum);
      return checkarray.length;
    });
  };

  //TODO:ボールを引いたら動くもの
  useEffect(() => {}, [ballNumList]);

  return (
    <div className="App">
      <Button title="bingo" onClick={() => getBall()}></Button>
      <Card cardNumberList={cardList} ballNumList={ballNumList}></Card>
    </div>
  );
}

export default App;
