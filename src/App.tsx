import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";

import "./App.css";
import { Button } from "./component/button";
import { Card } from "./component/card";
import { createRandomCardNumList } from "./utils/createCard";
import { noDuplicationRandomNum } from "./utils/random";

const StyledPage = styled.div`
  height:100vh;
  width:100vw;
  background-color: #bfc6de;
`;
const StyledResult = styled.div`
  padding:10px;
  color:#374362;
`;

const App: React.FC = () => {
  const [ball, setBall] = useState<number>(0);
  const [ballNumList, setBallNumList] = useState<number[]>([0]);
  const [lostAllBall, setLostAllBall] = useState<boolean>(false);
  const [cardList, setCardList] = useState<number[][]>([]);
  const [colCheckCardList, setColCheckCardList] = useState<number[][]>([]);
  const [crossCheckCardList, setCrossCheckCardList] = useState<number[][]>([]);
  const [isReach,setIsReach]=useState<boolean>(false);
  const [isBingo,setIsBingo]=useState<boolean>(false);

  useEffect(() => {
    initCardList();
  }, []);

  const initCardList=()=>{
    const initCard = createRandomCardNumList();
    setCardList(initCard.cardNumList);
    setColCheckCardList(initCard.centerFreeNumList);
    const crossNumList1 = [...Array(5)].map((val, idx) => {
      return (val = initCard.cardNumList[idx][idx]);
    });
    const crossNumList2 = [...Array(5)].map((val, idx) => {
      return (val = initCard.cardNumList[idx][4 - idx]);
    });
    setCrossCheckCardList([crossNumList1, crossNumList2]);
  }

  const getBall = () => {
    if (ballNumList.length < 76) {
      const ballNum = noDuplicationRandomNum(1, 75, ballNumList);
      setBall(ballNum);
      setBallNumList(ballNumList.concat(ballNum));
    } else {
      setLostAllBall(true);
    }
  };

  const checkCard = useCallback((reachOrBingo: number): boolean => {
    //縦横斜め合体リスト
    const checkList = cardList.concat(colCheckCardList, crossCheckCardList);
    const checkCountList = checkList.map((array) => {
      const checkarray: number[] = array.filter((cardNum) =>
        ballNumList.includes(cardNum)
      );
      return checkarray.length;
    });

    //checkCountListに4があればReach、5があればBingo
    if (checkCountList.includes(reachOrBingo)) {
      return true;
    } else {
      return false;
    }
  },[ballNumList, cardList, colCheckCardList,crossCheckCardList]);

  const resetBingo = () => {
    setBall(0);
    setBallNumList([0]);
    setLostAllBall(false);
    initCardList();
    setIsReach(false);
    setIsBingo(false);
  }

  useEffect(() => {
    setIsReach(checkCard(4));
    setIsBingo(checkCard(5));
  }, [ballNumList, checkCard]);

  return (
    <StyledPage className="App">
      <StyledResult>GetBallNum:{ball}</StyledResult>
      <StyledResult>REACH:{isReach ? "リーチ！" : ""}</StyledResult>
      <StyledResult>BINGO:{isBingo ? "ビンゴ‼︎" : ""}</StyledResult>
      <StyledResult>{lostAllBall&& "END"}</StyledResult>
      <Button title="GetBall" onClick={() => getBall()}></Button>
      <Button title="Reset" onClick={() => resetBingo()}></Button>
      <Card cardNumberList={cardList} ballNumList={ballNumList}></Card>
    </StyledPage>
  );
};

export default App;
