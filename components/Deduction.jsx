import React, { useState } from 'react'
import styled from 'styled-components';
import DeductionDetail from './DeductionDetail';

const StyledDeduction = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 5px 10px;
  .title {
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: 500;
    color: #555555;
  }
  .value-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .per {
    font-family: AppleSDGothicNeo;
    font-size: 26px;
    font-weight: 800;
    color: #d6dbde;
    margin: 0 !important;
  }
  .button-wrapper {
    display: flex;
    text-align: center;
    button {
    width: 20px;
    height: 6px;
    border: solid 3px #888888;
    }
  }
  .deduction-detail {
    padding: 20px 10px;
  }
  .won-wrapper {
    display: flex;
  }
  .won {
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 800;
    text-align: right;
    color: #333333;
    margin-right: 6px;
  }
    
`;


const Deduction = ({ item }) => {
  const { title, per, money } = item;
  const [toggle, setToggle] = useState(false);
  if (toggle === false)
    return (
      <StyledDeduction onClick={() => setToggle(true)} >
        <div className='title'>
          {title}
        </div>
        <div className='value-wrapper'>
          <div className='per'>
            {per}
          </div>
          <div className='won-wrapper'>
            <div className='won'>
              {money}
            </div>
            <div className='button-wrapper'>
              <img src='/static/drowdown.svg' />

          </div>
          </div>
        </div>
      </StyledDeduction>
    )
  if (toggle === true)
    return (
      <StyledDeduction>
        
        <div className='value-wrapper'>
          <div className='title'>
          {title}
        </div>
          <div className='won-wrapper'>
            <div className='won'>
              {money}
            </div>
            <div className='button-wrapper'>
              <img src='/static/dropup.svg' onClick={() => setToggle(false)} />
          </div>
          </div>
        </div>
        {!!item.content && item.content.map((i, index) => {
          return <DeductionDetail item={i} key={index} />
        })}
      </StyledDeduction>
    )
    return <div></div>;
}


export default Deduction;