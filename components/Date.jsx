import React from 'react'
import styled from 'styled-components'

const StyledDate = styled.div`
  padding: 1px 15px;
  background-color: #d8d8d8;
  font-family: NotoSansKR;
  font-size: 11px;
  font-weight: 500;
  color: #9d9d9d;
`;

const Date = () => {
  return (
    <StyledDate>
      11월 18일
    </StyledDate>
  )
}

export default Date;