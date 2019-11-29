import styled from 'styled-components';
import React from 'react';

import { headerHeight } from '../common/values'

const StyledHeader = styled.div`
  height: ${headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
    margin: 0 15px;
  }
  > div {
    display: flex;
    align-items: center;
  }
  button {
    width: 32px;
    height: 32px;
    background-color: #888888;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px 0 10px;
  }
  a {
    width: 64px;
    height: 32px;
    border-radius: 16px;
    background-color: #d8d8d8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`


const Header = () => {
  return (
    <StyledHeader>
      <img
        src='http://masmuz1.cafe24.com/wp-content/uploads/2019/05/%EC%8B%9C%EC%A0%80%EC%BF%A0%EC%85%98_%EC%95%9E-600.jpg'
        alt=''
        width='28px'
        height='28px'
      />
      <div>
      <a href="">로그인</a>
      <button>
        <img
          src="/static/plus.svg"
          alt=""
        />
      </button>
      </div>
    </StyledHeader>
  )
}

export default Header;