import React from 'react'
import styled from 'styled-components';

const StyledSignin = styled.div`
  margin: 31px 15px 0;
  pre {
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: 500;
    color: #666666;
    margin-bottom: 58px;
  }
  form {
      & div:first-child {
        margin-bottom: 31px;
        display: flex;
        justify-content: space-between;
      }
      input {
        width: 100%;
        height: 36px;
        border-radius: 4px;
        background-color: #d8d8d8;
        margin-bottom: 8px;
        font-family: NotoSansKR;
        font-size: 14px;
        font-weight: bold;
        color: #777777;
        text-indent: 15px;
      }
      & div:first-child input:first-child {
        width: 254px;
        height: 36px;
        border-radius: 4px;
        background-color: #d8d8d8;
        margin-bottom: 0;
      }
      button:nth-child(2) {
        width: 69px;
        height: 36px;
        border-radius: 4px;
        background-color: #d8d8d8;
        font-family: NotoSansKR;
        font-size: 14px;
        font-weight: bold;
        color: #828282;
      }
      button:nth-child(3) {
        z-index: 100;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 60px;
        background-color: #d8d8d8;
        font-family: NotoSansKR;
        font-size: 14px;
        font-weight: bold;
        color: #828282;
        text-align: center;
        line-height: 60px;
      }
    }
`;

const text = `
지금 등록하시면 
앞으로 !!한 서비스를 받아볼 수 있어요
`

const Signin = () => {
  return (
    <StyledSignin>
      <pre>
        {text}
      </pre>
      <form action="">
        <div>
          <input type="text" placeholder='아이디' />
          <button>중복 확인</button>
        </div>
        <div>
          <input type="password" placeholder='비밀번호' />
          <input type="password" placeholder='비밀번호 확안' />
        </div>
        <button>확인</button>
      </form>

    </StyledSignin>
  )
}

export default Signin;
