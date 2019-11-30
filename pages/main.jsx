import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { setLayout } from '../actions';

const StyledIndex = styled.div`
  width: 100vw;
  .title {
    font-family: AppleSDGothicNeo;
    font-size: 22px;
    font-weight: 400;
    color: #333333;
    margin: 30px 20px;
  }
  .circle {
    margin: 0 20px 40px;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color:#058ef3;
    background-image:
        ${({ backgroundImage }) => backgroundImage};
  }
  .inner-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    width: 310px;
    height: 310px;
    border-radius: 50%;
  }
  .circle-title {
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 500;
    color: #555555;
    margin-bottom: 3px;
  }
  .circle-content {
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: 500;
    color: #555555;
    margin-bottom: 31px;
  }
  .money-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 29px;
  }
  .money {
    font-family: AppleSDGothicNeo;
    font-size: 42px;
    font-weight: 800;
    color: #058ef3;
  }
  .won {
    margin-left: 10px;
    font-family: AppleSDGothicNeo;
    font-size: 20px;
    font-weight: bold;
    color: #555555;
  }
  .bar {
    width: 50px;
    height: 3px;
    background-color: #d6dbde;
    margin-bottom: 28px;
  }
  .per {
    font-family: AppleSDGothicNeo;
    font-size: 32px;
    font-weight: 800;
    color: #d6dbde;
  }
  .description-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px 20px;
    width: 335px;
    height: 60px;
    border-radius: 2px;
    box-shadow: 3px 9px 20px 0 #afb8be;
    background-color: #ffffff;
    .description {
      font-family: AppleSDGothicNeo;
      font-size: 14px;
      font-weight: 400;
      text-align: center;
      color: #111111;
      margin: 0;
    }
  }
`;


const Index = () => {
  const {name} = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout(''))
  }, [])
  const percent = name ? 76 : 100;
  const per = name ? percent * 3.6 : 100 * 3.6;
  let deg = 90
  let color = '#eeeeee'
  if (per <= 180) {
    deg += per;
  } else {
    deg += per - 180;
    color = '#058ef3'
  }
  const description = name
    ?
`지금부터 체크카드를 사용하시면
최대 20만원을 돌려 받으실 수 있답니다.`
    :
`지금 추가 정보를 입력하시면
내 연말 정산 등급과 금액을 확인할 수 있습니다.`
  const title = name
    ? 
`${name}님의 올해의 연말정산 
평가는3등급입니다. `
    :
`올해의 연말정산 평가
1등급을 노려보세요.`
  const backgroundImage = `
    linear-gradient(${deg}deg, transparent 50%, ${color} 50%),
    linear-gradient(90deg, #eeeeee 50%, transparent 50%);
  `
  return (
    <StyledIndex backgroundImage={backgroundImage}>
      <pre className='title'>
        {title}
      </pre>
      <div className='circle'>
        <div className='inner-circle'>
          <img src="/static/money.svg" alt="" />
          <div className='circle-title'>
            11월까지의 공제 합계 금액
        </div>
          <div className='circle-content'>
            오늘기준
        </div>
        <div className='money-wrapper'>
          <div className='money'>
            ~423,345
        </div>
          <div className='won'>
              원
          </div>
        </div>
        <div className='bar' />
          <div className='per'>
            {percent}%
          </div>
        </div>
        
      </div>
      <div className='description-wrapper'>
          <pre className='description'>
            {description}
          </pre>
        </div>
        <div className='description-wrapper'>
          <pre className='description'>
            {description}
          </pre>
        </div>
    </StyledIndex>
  )
}

export default Index;
