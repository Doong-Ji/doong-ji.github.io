import { css } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;700&display=swap');
  ${reset}
  html {
    height: 100%;
    font-size: 14px;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    height: 100%;
  }
  .ant-carousel .slick-dots li button {
    height: 13px;
  }
`;

export default GlobalStyle;
