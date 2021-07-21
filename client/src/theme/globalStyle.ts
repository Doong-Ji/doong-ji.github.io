import { css } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
  ${reset}

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    height: 100%;
  }
  html {
    height: 100%;
  }
  .ant-carousel .slick-dots li button {
    height: 13px;
  }
  //라운드 인풋박스
  .input_round {
    border: 1px solid #e2e2e2;
    border-radius: 12px;
  }
`;

export default GlobalStyle;
