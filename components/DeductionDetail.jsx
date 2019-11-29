import React from 'react'
import styled from 'styled-components';

const StyledDeductionDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  .title {
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: 500;
    color: #555555;
  }
  .content {
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: 500;
    text-align: right;
    color: #555555;
  }
`;


const DeductionDetail = ({item}) => {
  const {title, content} = item;
  return (
    <StyledDeductionDetail>
      <div className='title'>
        {title}
      </div>
      <div className='content'>
        {content}
      </div>
    </StyledDeductionDetail>
  )
}


export default DeductionDetail;