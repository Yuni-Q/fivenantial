import React, {useState} from 'react'
import styled from 'styled-components';
import DeductionDetail from './DeductionDetail';

const StyledDeduction = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 5px 10px;
  .title {
    font-family: NotoSansKR;
    font-size: 14px;
    font-weight: 500;
    color: #3a3a3a;
  }
  .value-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .per {
    height: 43px;
    opacity: 0.32;
    font-family: NotoSansKR;
    font-size: 29px;
    font-weight: bold;
    color: #333333;
    }
    .button-wrapper {
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
    
`;


const Deduction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <StyledDeduction>
      <div className='title'>
        인적공제
      </div>
      <div className='value-wrapper'>
        <div className='per'>
          45%
        </div>
        <div>
          1,244,555원
        </div>
      </div>
      <div className='button-wrapper'>
        <button onClick={() => setToggle((toggle) => !toggle)} />
      </div>
      {!!toggle && <div className='deduction-detail'>
        <DeductionDetail />
        <DeductionDetail />
        <DeductionDetail />
      </div>}
    </StyledDeduction>
  )
}


export default Deduction;