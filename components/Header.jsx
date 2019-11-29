import styled from 'styled-components';
import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'


import { headerHeight } from '../common/values'
import { signin } from '../actions';

const StyledHeader = styled.div`
  position: fixed;
  width: 100vw;
  background: white;
  z-index: 100;
  top: 0;
  left: 0;
  height: ${headerHeight};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .plus {
    width: 32px;
    height: 32px;
    margin-right: 21px;
    background: url('/static/plus.svg') center;
    border: none;
  }
  .close {
    width: 30px;
    height: 30px;
    margin-right: 21px;
    background: url('/static/close.svg') center;
    border: none;
  }
  .title {
    font-family: AppleSDGothicNeo;
    font-size: 16px;
    font-weight: 800;
    color: #888888;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
`


const Header = () => {
  const { title } = useSelector(state => state.layout)
  return (
    <StyledHeader>
      <div className='title'>{title}</div>
      {(title === '13월의 월급')
        ? <Link href='/form'>
          <a className='plus' />
        </Link>
        : <Link href='/'>
        <a  className='close'/>
        </Link>
      }
        
    </StyledHeader>
  )
}

export default Header;