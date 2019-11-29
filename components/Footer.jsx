import React from 'react'
import styled from 'styled-components';

import { footerHeight } from '../common/values'

const StyledFooter = styled.div`
  width: 100vw;
  height: ${footerHeight};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #d8d8d8;
  div {
    width: 34px;
    height: 34px;
    background-color: #888888;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>안녕</div>
      <div>안녕</div>
      <div>안녕</div>
    </StyledFooter>
  )
}

export default Footer;