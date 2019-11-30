import React from 'react'
import styled from 'styled-components';
import Router from 'next/router'

const StyledDeductionDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #ffffff;
  .title {
    font-family: AppleSDGothicNeo !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    color: #555555 !important;
  }
  .content {
    font-family: AppleSDGothicNeo !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    text-align: right !important;
    color: #555555 !important;
  }
`;


const DeductionDetail = ({ item }) => {
  const { title, content } = item;
  const onClick = () => {
    Router.push('/info')
  }
  return (
    <StyledDeductionDetail onClick={onClick}>
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