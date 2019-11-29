import React from 'react'
import styled from 'styled-components'

const StyledDate = styled.div`
  background-color: #ebedef;
  padding: 1px 15px;
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 500;
  color: #555555;
`;

const Date = () => {
  return (
    <StyledDate>
      11월 18일
    </StyledDate>
  )
}

export default Date;