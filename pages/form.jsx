import React, { useState } from 'react'
import styled from 'styled-components';

const StyledForm = styled.form`
  margin: 0 15px;
  label {
    display: inline-block;
    font-family: NotoSansKR;
    font-size: 14px;
    font-weight: bold;
    color: #424242;
    margin: 10px 0 8px;
  }
  button { 
    border-radius: 4px;
    background-color: #d8d8d8;
    padding: 4px;
    font-family: NotoSansKR;
    font-size: 14px;
    font-weight: bold;
    color: #565656;
    margin: 0 10px 8px 0;
  }
`;


const Form = () => {
  return (
    <StyledForm>
      <div>
        <label htmlFor="salary">급여</label>
      </div>
      <div>
        <input type="text" name='salary' id='salary' />
      </div>
      <div>
        <label>기업</label>
        <div>
          <button>중소기업</button>
          <button>중소기업</button>
        </div>
      </div>
      <div>
        <label>기업</label>
        <div>
          <button>중소기업</button>
          <button>중소기업</button>
        </div>
      </div>
      <div>
        <label>기업</label>
        <div>
          <button>중소기업</button>
          <button>중소기업</button>
        </div>
      </div>
      <div>
        <label>기업</label>
        <div>
          <button>중소기업</button>
          <button>중소기업</button>
        </div>
      </div>
      <div>
        <label>기업</label>
        <div>
          <button>중소기업</button>
          <button>중소기업</button>
        </div>
      </div>
      

    </StyledForm>
  )
}

export default Form;