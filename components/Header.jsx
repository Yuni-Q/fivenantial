import styled from 'styled-components';
import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'


import { headerHeight } from '../common/values'
import { signin, fetch } from '../actions';
import Axios from 'axios';

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
  .back {
    position: fixed;
    width: 100vw;
    height: 200vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }
  .back-text-wrapper {
    width: 375px;
    height: 60px;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: bold;
    color: #666666;
  }
  .back-text-wrapper2 {
    width: 375px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0d97fc;
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
  }
`

const fetchData  = async(dispatch) => {
  const result = await Axios.get('https://55af66b1.ngrok.io/calculate/1')
  dispatch(fetch(result))
  console.log(result)
  
  return result
}

const Header = () => {
  const { title } = useSelector(state => state.layout)
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(false)
  const onClick = () => {
    let url = 'https://testapi.openbanking.or.kr/oauth/2.0/authorize?'
    let response_type = 'code'
    let client_id = 'qtHjKYjja5RRbfIML02krrWOCd3tSGOOvoSyYoj3'
    let scope = 'login%20inquiry%20transfer'
    let state = '12345678901234567890123456789012'
    let auth_type = '0'
    let redirect_uri = 'http://127.0.0.1:5000/test'
    url += `response_type=${response_type}&client_id=${client_id}&scope=${scope}&`
    url += `state=${state}&auth_type=${auth_type}&redirect_uri=${redirect_uri}`
    window.location.href = url;   
}
  return (
    <StyledHeader>
      <div className='title'>{title}</div>
      {(title === '13월의 월급')
        ? 
        // <Link href='/'>
          <div className='plus' onClick={() => setPopup(true)}/>
        // </Link>
        : <Link href='/main'>
        <a className='close'/>
        </Link>
      }
      {!!popup && 
        <div className='back' onClick={() => setPopup(false)}>
          <div 
            className='back-text-wrapper'
            onClick={() => {
              dispatch(signin('Yuni-Q'));
              fetchData(dispatch);
            }}
          >
            추가 개인정보 입력하기
          </div>
          <div className='back-text-wrapper2'
            onClick={onClick}
          >금융정보 연동하기</div>
          <div>b</div>
        </div>
      } 
        
    </StyledHeader>
  )
}

export default Header;