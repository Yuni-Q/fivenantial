import React from 'react'
import styled from 'styled-components';
import {Progress} from 'antd';

import DeductionDetail from '../components/DeductionDetail'

const StyledInfo = styled.div`
  nav {
    width: 100vw;
    height: 43px;
    background-color: #eeeeee;
    overflow: scroll;
    margin-bottom: 18px; 
  }
  ul {
    display: flex;
  }
  li {
    flex-shrink: 0;
    padding: 12px;
  }
  .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 15px;
  }
  .title {
    font-family: NotoSansKR;
    font-size: 14px;
    font-weight: bold;
    color: #565656;
  }
  .per {
    font-family: NotoSansKR;
    font-size: 29px;
    font-weight: bold;
    color: #333333;
  }
  .progress-wrapper {
    margin: 0 15px;
  }
  .value {
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: bold;
    color: #333333;
    text-align: center;
    margin: 8px 0 30px;
  }
  .sub-title {
    font-family: NotoSansKR;
    font-size: 14px;
    font-weight: bold;
    color: #606060;
    margin: 0 15px;
    margin-bottom: 27px;
  }
  .detail-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 15px 15px;
  }
  .detail-title {
    font-family: NotoSansKR;
    font-size: 14px;
    font-weight: bold;
    color: #6b6b6b;
  }
  .date {
    padding: 1px 15px;
    background-color: #d8d8d8;
    font-family: NotoSansKR;
    font-size: 11px;
    font-weight: 500;
    color: #9d9d9d;
  }
  .deduction-detail {
    margin: 14px 15px;
  }
`;
const Info = () => {
  return (
    <StyledInfo>
      <nav>
        <ul>
          <li>문화공제</li>
          <li>문화공제</li>
          <li>문화공제</li>
          <li>문화공제</li>
          <li>문화공제</li>
          <li>문화공제</li>
          <li>문화공제</li>
          <li>문화공제</li>
          <li>문화공제</li>
          <li>문화공제</li>
        </ul>
      </nav>
      <div className='title-wrapper'>
        <div className='title'>
          지금까지의 문화공제의 공제 비율입니다 
        </div>
        <div className='per'>
          45%
        </div>
      </div>
      <div className='progress-wrapper'>
        <Progress percent={45} showInfo={false} />
      </div>
      <div className='value'>
        1,244,555원
      </div>
      <div className='sub-title'>
        매달 공제된 금액은?
      </div>
      <div className='detail-wrapper'>
        <div className='detail-title'>
          사용 내역
        </div>
        <div className='detail-category'>
          전체
        </div>
      </div>
      <div className='date'>
          11월 23일
      </div>
      <div className='deduction-detail'>
        <DeductionDetail />
        <DeductionDetail />
        <DeductionDetail />
      </div>
      <div className='date'>
          11월 23일
      </div>
      <div className='deduction-detail'>
        <DeductionDetail />
        <DeductionDetail />
        <DeductionDetail />
      </div>
      <div className='date'>
          11월 23일
      </div>
      <div className='deduction-detail'>
        <DeductionDetail />
        <DeductionDetail />
        <DeductionDetail />
      </div>
      <div className='date'>
          11월 23일
      </div>
      <div className='deduction-detail'>
        <DeductionDetail />
        <DeductionDetail />
        <DeductionDetail />
      </div>
      
    </StyledInfo>
  )
}


export default Info;