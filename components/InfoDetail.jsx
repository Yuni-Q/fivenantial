import React, { useState } from 'react'
import styled from 'styled-components';
import DeductionDetail from './DeductionDetail';

const StyledInfoDetail = styled.div`
  .into-detail-title-wrapper {
    background-color: #afb8be;
    padding: 5px 10px;
  }
  .into-detail-title {
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    padding: 0;
  }
    
`;


const InfoDetail = ({ item }) => {
  const { title } = item;
    return (
      <StyledInfoDetail>
        <div className='into-detail-title-wrapper'>
          <div className='into-detail-title'>
          {title}
          </div>
        </div>
        {!!item.content && item.content.map((i, index) => {
          return <DeductionDetail item={i} key={index} />
        })}
      </StyledInfoDetail>
    )
}


export default InfoDetail;