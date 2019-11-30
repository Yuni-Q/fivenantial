import React, { useState } from 'react'
import styled from 'styled-components';
import { Progress } from 'antd';
import InfoDetail from '../components/InfoDetail';

const StyledInfo = styled.div`
  nav {
    display: block;
    width: 100vw;
    height: 49px;
    overflow: scroll; 
    padding: 0 24px;
  }
  ul {
    display: flex;
  }
  li {
    flex-shrink: 0;
    padding: 12px;
    margin-right: 50px;
  }
  .title-wrapper {
    padding-top: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    margin: 0 15px;
    font-family: AppleSDGothicNeo;
    font-size: 23px;
    font-weight: 400;
    color: #555555;
    margin-bottom: 15px;
    line-height: 25px;
  }
  .per {
    font-family: AppleSDGothicNeo;
    font-size: 32px;
    font-weight: 800;
    color: #d6dbde;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-80%);
  }
  .progress-wrapper {
    margin: 0 15px;
    position: relative;
  }
  .value {
    font-family: AppleSDGothicNeo;
    font-size: 20px;
    font-weight: bold;
    color: #333333;
    text-align: center;
    margin: 8px 0 35px;
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
    margin: 0 15px 15px 0;
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
  .active-tap {
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 800;
    color: #058ef3;
    border-bottom: 3px solid #058ef3;
  }
  .inactive-tap {
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 800;
    color: #afb8be;
  }
  .body-wrapper {
    background-color: #ebedef;
  }
  .list {
    margin: 0 20px;
  }
  .range-wrapper {
    width: 93px;
    height: 28px;
    border-radius: 2px;
    border: solid 2px #d6dbde;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .range {
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: #afb8be;
    margin-right: 8px;
    position: relative;
    text-align: center;
  }
  .down {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%)
  }
`;
const Info = () => {
  const [tab, setTab] = useState('소기업…공제부금');
  const list = [
    {
      title: '11월 28일',
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
      title: '11월 28일',
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
      title: '11월 28일',
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
      title: '11월 28일',
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
      title: '11월 28일',
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
  ]
  return (
    <StyledInfo>
      <nav>
        <ul>
          <li
            className={tab === '소기업…공제부금' ? 'active-tap' : 'inactive-tap'}
            onClick={() => setTab('소기업…공제부금')}
          >
            소기업…공제부금
            <div className='bar' style={{height: '106px'}}/>
          </li>
          <li
            className={tab === '주택마련저축' ? 'active-tap' : 'inactive-tap'}
            onClick={() => setTab('주택마련저축')}
          >주택마련저축</li>
          <li className={tab === '투자조합출자등' ? 'active-tap' : 'inactive-tap'}
            onClick={() => setTab('투자조합출자등')}
          >주택마련저축</li>
          <li>문화공제</li>
          <li>문화공제</li>
          <li>문화공제</li>
          <li>문화공제</li>
          <li>문화공제</li>
          <li>문화공제</li>
          <li>문화공제</li>
        </ul>
      </nav>
      <div className='body-wrapper'>
        <div className='title-wrapper'>
          <div className='title'>
            현재 소기업,소상공인 문화공제의<br />
            공제 비율과 금액입니다.
        </div>

        </div>
        <div className='progress-wrapper'>
          <div className='per'>
            45%
        </div>
          <Progress percent={45} showInfo={false} strokeWidth={22} strokeColor={'#0d97fc'} />
        </div>
        <div className='value'>
          1,244,555원
      </div>
        <div className='title'>
          매달 공제된 금액은?
      </div>
        <Chart />
        <div className='detail-wrapper'>
          <div className='title'>
            사용 내역
        </div>
          <div className='range-wrapper'>
            <div className='range'>
              <img className='down' src="/static/main-dropdown.svg" alt="" width='15px' height='14px' />
              <select>
                <option value="">
                  전체기간
          </option>
                <option value="volvo">3달</option>
                <option value="volvo">2달</option>
                <option value="volvo">1달</option>
              </select>
            </div>

          </div>
        </div>
        <div className='list'>
          {list.map((l, index) => {
            return <InfoDetail item={l} key={index} />
          })}
        </div>
      </div>
    </StyledInfo>
  )
}


export default Info;

const StyledChart = styled.div`
  position: relative;
  height: 150px;
  display: flex;
  align-items: flex-end;
  .month-wrapper {
    border-top: solid 5px #afb8be;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: 500;
    color: #555555;
  }
  .month {
    position: relative;
  }
  .bar {
    position: absolute;
    background-color: #ebedef;
    width: 9px;
    height: 106px;
    background-color: #058ef3;
    top: 0;
    transform: translateY(-105%);
    margin-left: 2px;
  }
`;

const Chart = () => {
  return (
    <StyledChart>
      <div className='month-wrapper'>
        <div className='month'>
          1월
      <div className='bar' style={{height: '96px'}}/>
        </div>
        <div className='month'>2월<div className='bar' style={{height: '87px'}}/>
        </div>
        <div className='month'>3월<div className='bar' style={{height: '79px'}}/>
        </div>
        <div className='month'>4월<div className='bar' style={{height: '92px'}}/>
        </div>
        <div className='month'>5월<div className='bar' style={{height: '106px'}}/>
        </div>
        <div className='month'>6월<div className='bar' style={{height: '81px'}}/>
        </div>
        <div className='month'>7월<div className='bar' style={{height: '80px'}}/>
        </div>
        <div className='month'>8월<div className='bar' style={{height: '106px'}}/>
        </div>
        <div className='month'>9월<div className='bar' style={{height: '89px'}}/>
        </div>
        <div className='month'>10월<div className='bar' style={{height: '99px'}}/>
        </div>
        <div className='month'>11월<div className='bar' style={{height: '50px'}}/>
        </div>
        <div className='month'>12월<div className='bar' style={{height: '0px'}}/>
        </div>
      </div>
    </StyledChart>
  )
}