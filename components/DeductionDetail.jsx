import React from 'react'
import styled from 'styled-components';

const StyledDeductionDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-family: NotoSansKR;
    font-size: 14px;
    font-weight: 500;
    color: #3a3a3a;
  }
  .content {
    font-family: NotoSansKR;
    font-size: 15px;
    font-weight: bold;
    color: #333333;
  }
`;


const DeductionDetail = () => {
  return (
    <StyledDeductionDetail>
      <div className='title'>
        인적공제
      </div>
      <div className='content'>
        1,244,555원
      </div>
    </StyledDeductionDetail>
  )
}


export default DeductionDetail;