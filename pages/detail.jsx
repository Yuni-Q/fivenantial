import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

import Deduction from '../components/Deduction';
import { setLayout } from '../actions';

const StyledDetail = styled.div`
  width: 100vw;
  .main {
    margin: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .main-box {
    padding: 10px;
    border-radius: 2px;
    box-shadow: 3px 9px 20px 0 #afb8be;
    background-color: #ffffff;
  }
  .main-title {
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: 500;
    color: #555555;
  }
  .per {
    font-family: AppleSDGothicNeo;
    font-size: 32px;
    font-weight: 800;
    color: #d6dbde;
    margin-bottom: 22px;
  }
  .value {
    font-family: AppleSDGothicNeo;
    font-size: 20px;
    font-weight: bold;
    color: #333333;
    width: 140px;
    text-align: end;
  }
  .tab-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 76px;
  }
  .tab-active {
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 800;
    color: #058ef3;
    position: relative;
  }
  .tab-inactive {
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 800;
    color: #afb8be;
    position: relative;
  }
  .list {
    background-color: #ebedef;
    padding: 20px;
  }
  .tab-active-bar {
    width: 60px;
    height: 3px;
    border-radius: 1.5px;
    background-color: #058ef3;
    position: absolute;
    left: -6px;
  }
`;

const Detail = () => {
  const [tab, setTab] = useState('소득공제')
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout('세부 공제 분석'))
  }, [])
  const list = [
    {
      title: '기타 소득 공제',
      per: '64%',
      money: '1,500,000원',
      content: [
        {
          title: '개인연금저축',
          content: '829,298원',
        },
        {
          title: '개인연금저축',
          content: '829,298원',
        },
        {
          title: '개인연금저축',
          content: '829,298원',
        },
        {
          title: '개인연금저축',
          content: '829,298원',
        },
      ],
    },
    {
      title: '기타 소득 공제',
      per: '64%',
      money: '1,500,000원',
    },
    {
      title: '기타 소득 공제',
      per: '64%',
      money: '1,500,000원',
    },
    {
      title: '기타 소득 공제',
      per: '64%',
      money: '1,500,000원',
    },
    {
      title: '기타 소득 공제',
      per: '64%',
      money: '1,500,000원',
    },
  ]
  return (
    <StyledDetail>
      <div className='main'>
        <div className='main-box'>
          <div className='main-title'>소득공제 현황</div>
          <div className='per'>74%</div>
          <div className='value'>124,000원</div>
        </div>
        <div className='main-box'>
          <div className='main-title'>세액공제 현황</div>
          <div className='per'>46%</div>
          <div className='value'>231,600원</div>
        </div>
      </div>
      <div className='tab-wrapper'>
        <div className={tab === '소득공제' ? 'tab-active' : 'tab-inactive'} onClick={() => setTab('소득공제')}>
          소득공제
          {tab === '소득공제' && <div className='tab-active-bar' />}
        </div>
        <div className={tab === '세액공제' ? 'tab-active' : 'tab-inactive'} onClick={() => setTab('세액공제')}>
          세액공제
          {tab === '세액공제' && <div className='tab-active-bar' />}
        </div>
      </div>
      <div className='list'>
        {list.map((l, index) => {
          return <Deduction item={l} key={index} />
        })}
      </div>

    </StyledDetail>
  )
}

export default Detail;
