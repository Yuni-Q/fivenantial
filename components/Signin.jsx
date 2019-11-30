import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { setLayout, signin } from '../actions';
import { useDispatch } from 'react-redux'
import Router from 'next/router';
import {fetchData } from './Header';

const StyledSignin = styled.div`
  margin: 0 20px 60px;
  .page-info-wrapper {
    display: flex;
    margin: 5px 0;
    justify-content: flex-end;
  }
  .page-info-active {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #058ef3;
  }
  .page-info-inactive {
    margin-right: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #afb8be;
  }
  .title {
    font-family: AppleSDGothicNeo;
    font-size: 22px;
    font-weight: 400;
    color: #555555;
    margin-bottom: 69px;
  }
  label {
    display: block;
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: 500;
    color: #888888;
    margin-bottom: 5px;
  }
  .id-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .id {
    border-radius: 2px;
    background-color: #ebedef;
    font-family: AppleSDGothicNeo;
    font-size: 20px;
    font-weight: bold;
    color: #333333;
    padding-left: 10px;
    margin-right: 10px;
  }
  .id:focus {
    background: #ffffff;
  }
  .button {
    width: 80px;
    height: 36px;
    border-radius: 2px;
    background-color: #1875ba;
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    line-height: 36px;
  }
  .password-wrapper {
    margin-bottom: 12px;
  }
  .password {
    padding-left: 10px;
    width: 100%;
    border-radius: 2px;
    background-color: #ebedef;
    font-family: AppleSDGothicNeo;
    font-size: 22px;
    color: #333333;
  }
  .password:focus {
    background: #fff;
  }
  .password-description {
    font-family: AppleSDGothicNeo;
    font-size: 11px;
    font-weight: 500;
    color: #ff8484;
  }
  .button-wrapper-complete {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
  .back {
    display: inline-block;
    text-align: center;
    width: 90px;
    height: 60px;
    background-color: #afb8be;
    font-family: AppleSDGothicNeo;
    font-size: 22px;
    font-weight: bold;
    color: #ffffff;
    line-height: 60px;
  }
  .complete {
    display: flex;
    border: 0;
    margin: 0;
    padding: 0;
    line-height: 60px;
    text-align: center;
    width: 285px;
    height: 60px;
    background-color: #058ef3;
    font-family: AppleSDGothicNeo;
    font-size: 22px;
    font-weight: bold;
    color: #ffffff;
    display: inline-block;
  }
`;

const Signin = ({setPage}) => {
  const [password, setPassword ] = useState('');
  const [password2, setPassword2 ] = useState('');
  const [error, setError ] = useState(false);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(signin('안준현'));
    fetchData(dispatch);
    Router.push('/main');
  }
  useEffect(() => {
    dispatch(setLayout('기본 정보 입력'))
  }, [])
  useEffect(() => {
    setError(password !== password2)
  }, [password2])
  return (
    <StyledSignin>
      <div className='page-info-wrapper'>
          <div className='page-info-inactive' />
          <div className='page-info-active' />
        </div>
      <div className='title'>
        Wow한 연말정산<br />
        13월의 월급과 함께하세요.
      </div>
      <form action="">
        <label htmlFor="id">아이디</label>
        <div className='id-wrapper'>
          <input type="text" className='id' />
          <div className='button' onClick={() => window.alert(['종복 된 아이디 입니다.'])}>중복확인</div>
        </div>
        <label htmlFor="password">비밀번호</label>
        <div className='password-wrapper'> 
          <input type="password" name="" id="" className='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <label htmlFor="password2">비밀번호 확인</label>
        <div className='password-wrapper'> 
          <input type="password" name="" id="" className='password' value={password2} onChange={e=> setPassword2(e.target.value)} />
          {!!error && <div className='password-description'>
            비밀번호가 일치하지 않습니다. 확인해주세요.
          </div>}
        </div>
        
        <div className='button-wrapper-complete'>
          <div className='back' onClick={() => setPage(1)}>
            이전
          </div>
              <div className='complete' onClick={onClick}>
                완료
              </div>
        </div>
        
      </form>

    </StyledSignin>
  )
}

export default Signin;
