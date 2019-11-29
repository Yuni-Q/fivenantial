import React from 'react';
import styled from 'styled-components';

import { bodyHeight } from '../common/values'

const StyledIndex = styled.div`
  width: 100vw;
  height: ${bodyHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .circle {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* border-color: red green blue pink; */
    background-color:#39B4CC;
    background-image:
        ${({a}) => a};
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: white;
      width: 310px;
      height: 310px;
      border-radius: 50%;
    }
  }
  h1 {
    width: 249px;
    height: 45px;
    font-family: NotoSansKR;
    font-size: 30px;
    font-weight: bold;
    color: #333333;
  }
  h2 {
    width: 106px;
    height: 38px;
    font-family: NotoSansKR;
    font-size: 26px;
    font-weight: bold;
    color: #888888;
  }
  & > div:first-child {
    width: calc( 100vw - 32px);
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 51px;
    & > div:nth-child(1) {
      width: 40px;
      height: 32px;
      background-color: #d8d8d8;
    }
    & > div:nth-child(2) {
      width: 295px;
      height: 32px;
      background-color: #d8d8d8;
      display: flex;
      align-items: center;
      padding-left: 16px;
    }

  }
`;

const Index = () => {
  const per = 75 * 3.6;
  let deg = 90
  let color = '#A2ECFB'
  if (per <= 180){
    deg += per;
  } else {
    deg += per - 180;
    color = '#39B4CC'
  }
  return (
    <StyledIndex a={`linear-gradient(${deg}deg, transparent 50%, ${color} 50%),
      linear-gradient(90deg, #A2ECFB 50%, transparent 50%);`}>
      <div>
        <div />
        <div>
          오늘의 금융팁 알아보기
        </div>
      </div>
      <div className='circle'>
        <div>
        <h1>
          로그인하고 알아보기
        </h1>
        <h2>
          ??% 달성
        </h2>
        </div>
      </div>
    </StyledIndex>
  )
}

export default Index;
