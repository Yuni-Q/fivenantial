import React from 'react'
import styled from 'styled-components';

import Deduction from '../components/Deduction';

const StyledDetail = styled.div`
  width: 100vw;
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    margin: 0 43px 25px;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & div:nth-child(2) {
        height: 20px;
        font-family: NotoSansKR;
        font-size: 14px;
        font-weight: 500;
        color: #666666;
      }
      & div:nth-child(3) {
        height: 27px;
        font-family: NotoSansKR;
        font-size: 18px;
        font-weight: bold;
        color: #333333;
      }
      & div:nth-child(1) {
        height: 43px;
        font-family: NotoSansKR;
        font-size: 29px;
        font-weight: bold;
        color: #333333;
      }
    }
    & > div:nth-child(2) {
      width: 4px;
      height: 80px;
      opacity: 0.42;
      background-color: #d8d8d8;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    div {
      width: 50%;
      text-align: center;
    }
  }
  & > div:nth-child(3) {
    background-color: #eeeeee;
    padding:28px 15px 13px;
  }
`;

const Detail = () => {
  return (
    <StyledDetail>
      <div>
        <div>
          <div>
            45%
          </div>
          <div>
            소득공제 현황
          </div>
          <div>
            1,244,555원
          </div>
        </div>
        <div />
        <div>
          <div>
            45%
          </div>
          <div>
            소득공제 현황
          </div>
          <div>
            1,244,555원
          </div>
        </div>
      </div>
      <div>
          <div>
            소득공제
          </div>
          <div>
            세액공제
          </div>
      </div>
      <div>
        <Deduction />
        <Deduction />
        <Deduction />
        <Deduction />
        <Deduction />
        <Deduction />
        <Deduction />
        <Deduction />
        <Deduction />
        <Deduction />
      </div>

    </StyledDetail>
  )
}

export default Detail;
