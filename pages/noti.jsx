import React, { useEffect } from 'react'
import styled from 'styled-components';
import Date from '../components/Date';
import { setLayout } from '../actions';
import { useDispatch } from 'react-redux';

const StyledNoti = styled.div`
  .noti-wrapper {
    margin: 9px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .noti-img {
    width: 40px;
    height: 32px;
    margin-right: 13px;
  }
  .noti-content {
    height: 20px;
    font-family: NotoSansKR;
    font-size: 14px;
    font-weight: 500;
    color: #666666;
  }
  .noti-img-wrapper {
    display: flex;
    align-items: center;
  }
`;
const Noti = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout('연말정산 공제 조언'))
  }, [])
  const list = [
    {
      date: '11월 8일',
      content: [
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
      ],
    },
    {
      date: '11월 8일',
      content: [
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
      ],
    },
    {
      date: '11월 8일',
      content: [
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
      ],
    },
    {
      date: '11월 8일',
      content: [
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
        '금융팁-오늘은 체크카드를 사용해보세요',
      ],
    },
  ]
  return (
    <StyledNoti>
      {list.map((l, index) => {
        return (
          <div key={index}>
            <Date date={l.date} />
            {l.content.map((c, index2) => {
              return (
                <div className='noti-wrapper' key={index2}>
                  <div className='noti-img-wrapper'>
                  <img src='/static/tip-checkcard.svg' className='noti-img' />
                  <div className='noti-content'>
                    {c}
                  </div>
                  </div>
                  <img src="/static/next-grey.svg" alt=""/>
                </div>
              )
            })}
          </div>
        )
      })}
    </StyledNoti>
  )
}

export default Noti;