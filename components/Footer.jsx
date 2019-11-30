import React, { useState } from 'react'
import styled from 'styled-components';
import Router from 'next/router';

import { footerHeight } from '../common/values'

const StyledFooter = styled.div`
  width: 100vw;
  height: ${footerHeight};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: solid 2px #d6dbde;
  background-color: #ffffff;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
  }
  .img {
    width: 25px;
    height: 25px;
  }
  .active-text {
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: bold;
    color: #058ef3;
  }
  .inactive-text {
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: bold;
    color: #d6dbde;
  }
`;

const Footer = () => {
  const [catogory, setCategory] = useState('home');
  return (
    <StyledFooter>
      <div onClick={() => {
        setCategory('home')
        Router.push('/main')
      }}>
            {catogory === 'home'
              ? <img src="/static/home-active.svg" alt="" />
              : <img src="/static/home-inactive.svg" alt="" />
            }
            <div className={catogory === 'home' ? 'active-text' : 'inactive-text'}>
              전체현황
            </div>
      </div>
      <div onClick={() => {
        setCategory('analyze')
        Router.push('/detail')
      }}>
        {catogory === 'analyze'
              ? <img src="/static/analyze-active.svg" alt="" />
              : <img src="/static/analyze-inactive.svg" alt="" />
        }
            <div className={catogory === 'analyze' ? 'active-text' : 'inactive-text'}>
              세부분석
        </div>
      </div>
      <div onClick={() => {
        setCategory('tip')
        Router.push('/noti')
      }}>
        {catogory === 'tip'
              ? <img src="/static/tip-active.svg" alt="" />
              : <img src="/static/tip-inactive.svg" alt="" />
        }
        
        <div className={catogory === 'tip' ? 'active-text' : 'inactive-text'}>
          공제조언
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer;