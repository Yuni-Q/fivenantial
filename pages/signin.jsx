import React, { useEffect } from 'react'
import styled from 'styled-components';
import { setLayout } from '../actions';
import { useDispatch } from 'react-redux'

const StyledSignin = styled.div`
  margin: 40px 20px 60px;
  .title {
    font-family: AppleSDGothicNeo;
    font-size: 22px;
    font-weight: 300;
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
  .button-wrapper {
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
  }
`;

const Signin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout('기본 정보 입력'))
  }, [])
  return (
    <StyledSignin>
      <div className='title'>
        Wow한 연말정산<br />
        13월의 월급과 함께하세요.
      </div>
      <form action="">
        <label htmlFor="id">아이디</label>
        <div className='id-wrapper'>
          <input type="text" className='id' />
          <div className='button'>중복확인</div>
        </div>
        <label htmlFor="password">비밀번호</label>
        <div className='password-wrapper'> 
          <input type="password" name="" id="" className='password' />
        </div>
        <label htmlFor="password2">비밀번호 확인</label>
        <div className='password-wrapper'> 
          <input type="password" name="" id="" className='password' />
          <div className='password-description'>
            비밀번호가 일치하지 않습니다. 확인해주세요.
          </div>
        </div>
        
        <div className='button-wrapper'>
          <a href="" className='back'>
            이전
          </a>
          <button className='complete'>
            완료
          </button>
        </div>
        
      </form>

    </StyledSignin>
  )
}

export default Signin;
