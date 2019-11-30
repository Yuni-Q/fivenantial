import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux'

import { setLayout } from '../actions';
import Signin from '../components/Signin'

const StyledForm = styled.form`
  margin: 0 20px;
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
    margin-right: 10px;
  }
  .page-info-inactive {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #afb8be;
  }
  label {
    display: block;
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: 500;
    color: #888888;
    margin-bottom: 5px;
  }
  .salary-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .won {
    font-family: AppleSDGothicNeo;
    font-size: 22px;
    color: #333333;
    margin-left: 8px;
  }
  input {
    width: 250px;
    height: 36px;
    border-radius: 2px;
    box-shadow: 1px 6px 6px 0 #d6dbde;
    font-family: AppleSDGothicNeo;
    font-size: 20px;
    font-weight: bold;
    color: #333333;
    padding-left: 10px;
    background-color: #ebedef;
  }
  input:focus {
    background-color: #ffffff;
  }
  .button-active {
    width: 70px;
    border-radius: 16px;
    border: solid 2px #058ef3;
    background-color: #ffffff;
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #058ef3;
    margin: 0 10px 20px 0;
    /* padding: 5px 15px; */
  }
  .button-inactive {
    width: 70px;
    border-radius: 16px;
    border: solid 2px #d6dbde;
    background-color: #ffffff;
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #afb8be;
    margin: 0 10px 20px 0;
    /* padding: 5px 15px; */
  }
  .radio-wrapper {
    border-radius: 16px;
    background-color: #ebedef;
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: #afb8be;
  }
  .radio-active {
    width: 70px;
    border-radius: 16px;
    border: solid 2px #058ef3;
    background-color: #ffffff;
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #058ef3;
    /* padding: 5px 15px; */
  }
  .radio-inactive {
    width: 70px;
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #afb8be;
    /* padding: 5px 15px; */
  }
  .radio-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  span {
    display: inline-block;
  }
  .description-box {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 14px;
  }
  .description-wrapper {
      width: 168px;
      height: 40px;
      border-radius: 2px;
      background-color: #ebedef;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .description-text {
      font-family: AppleSDGothicNeo;
      font-size: 12px;
      font-weight: 500;
      color: #555555;
      margin: 0;
      line-height: 14px;
      margin-right: 4px;
    }
    .button {
      width: 100vw;
      height: 60px;
      z-index: 100;
      background-color: #058ef3;
      font-family: AppleSDGothicNeo;
      font-size: 22px;
      font-weight: bold;
      color: #ffffff;
      text-align: center;
      line-height: 60px;
      position: fixed;
      bottom: 0;
      left: 0;
    }
    .partner {
      height: 100px;
      border-radius: 2px;
      background-color: #ebedef;
      margin: 0 -20px 10px;
      label {
        padding: 10px 20px 0;
      }
      input {
        margin: 0 20px;
      }
      .salary-wrapper {
        margin-bottom: 5px;
      }
    }
`;


const Form = () => {
  const [enterprise, setEnterprise] = useState(true);
  const [checkCard, setCheckCard] = useState(false);
  const [creditCard, setCreditCard] = useState(false);
  const [cash, setCash] = useState(false);
  const [offer, setOffer] = useState(false);
  const [pension, setPension] = useState(false);
  const [marriage, setMarriage] = useState(false);
  const [solo, setSolo] = useState(false);
  const [monthly, setMonthly] = useState(false);
  const [charter, setCharter] = useState(false);
  const [self, setSelf] = useState(false);

  const [salary, setSalary] = useState(0);
  const [partnerSalary, setPartnerSalary] = useState(0);

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout('기본 정보 입력'))
  }, [])
  if (page === 1)
    return (
      <StyledForm>
        <div className='page-info-wrapper'>
          <div className='page-info-active' />
          <div className='page-info-inactive' />
        </div>
        <form action="">
          <label htmlFor="salary">연 소득</label>
          <div className='salary-wrapper'>
            <input type="number" id='salary' name='salary' value={salary} onChange={(e) => setSalary(e.target.value)} />
            <div className='won'>만원</div>
          </div>

          <label>재직 기업 규모</label>
          <span className={enterprise ? 'button-active' : 'button-inactive'} onClick={() => setEnterprise(true)}>대기업</span>
          <span className={enterprise ? 'button-inactive' : 'button-active'} onClick={() => setEnterprise(false)}>중소기업</span>

          <label>주 금융 지불 방식</label>
          <span className={checkCard ? 'button-active' : 'button-inactive'} onClick={() => setCheckCard(!checkCard)} >체크카드</span>
          <span className={creditCard ? 'button-active' : 'button-inactive'} onClick={() => setCreditCard(!creditCard)}>신용카드</span>
          <span className={cash ? 'button-active' : 'button-inactive'} onClick={() => setCash(!cash)}>현금</span>
          <div>
            <div className='radio-box'>
              <label>
                주택 청약 저축 여부
          </label>
              <div className='radio-wrapper'>
                <span className={offer ? 'radio-active' : 'radio-inactive'} onClick={() => setOffer(true)}>청약중</span>
                <span className={offer ? 'radio-inactive' : 'radio-active'} onClick={() => setOffer(false)}>청약없음</span>
              </div>
            </div>

            <div className='radio-box'>
              <label>
                퇴직 연금 가입 여부
          </label>
              <div className='radio-wrapper'>
                <span className={pension ? 'radio-active' : 'radio-inactive'} onClick={() => setPension(true)}>가입됨</span>
                <span className={pension ? 'radio-inactive' : 'radio-active'} onClick={() => setPension(false)}>가입안함</span>
              </div>
            </div>

            <div className='radio-box'>
              <label>
                결혼여부
          </label>
              <div className='radio-wrapper'>
                <span className={marriage ? 'radio-active' : 'radio-inactive'} onClick={() => setMarriage(true)}>결혼</span>
                <span className={marriage ? 'radio-inactive' : 'radio-active'} onClick={() => setMarriage(false)}>미혼</span>
              </div>
            </div>

            {!!marriage && <div className='partner'>
              <label htmlFor="salary">배우자 소득</label>
              <div className='salary-wrapper'>
                <input type="number" id='salary' name='salary' value={partnerSalary} onChange={(e) => setPartnerSalary(e.target.value)} />
                <div className='won'>만원</div>
              </div>
            </div>}

            <div className='radio-box'>
              <label>
                1인 가구
          </label>
              <div className='radio-wrapper'>
                <span className={solo ? 'radio-active' : 'radio-inactive'} onClick={() => { setSolo(true) }}>해당</span>
                <span className={solo ? 'radio-inactive' : 'radio-active'} onClick={() => { setSolo(false) }}>미해당</span>
              </div>
            </div>

            <label>거주 형태</label>
            <span className={monthly ? 'button-active' : 'button-inactive'} onClick={() => setMonthly(!monthly)}>월세</span>
            <span className={charter ? 'button-active' : 'button-inactive'} onClick={() => setCharter(!charter)}>전세</span>
            <span className={self ? 'button-active' : 'button-inactive'} onClick={() => setSelf(!self)}>자가</span>
          </div>
          <button className='button' onClick={() => setPage(2)}>다음</button>
          <div className='description-box'>
          <div className='description-wrapper'>
            <div className='description-text'>
              추가 정보를 입력하고<br />
              정확한 계산을 받아보세요
          </div>
            <img className='next' src="/static/next.svg" alt="" width='24px' height='24px' />
          </div>
        </div>
        </form>
        
      </StyledForm>
    )
  if (page === 2)
    return (
      <Signin setPage={setPage} />
    )
}

export default Form;