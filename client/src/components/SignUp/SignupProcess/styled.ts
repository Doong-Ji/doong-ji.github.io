import styled from '@emotion/styled';
export const SignupSection = styled.section`
  position: absolute;
  top: 40px;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  width: calc(100% - 30px);
  height: calc(100% - 87px);
  overflow: hidden;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 50%);
  border-radius: 30px;
  max-width: 550px;
  background-color: white;

  #signupFormWrap {
    width: 100%;
    height: 100%;
    padding: 34px 14px 39px;
    overflow-y: auto;
  }

  //input
  .ant-input-affix-wrapper {
    height: 45px;
    border: 1px solid #e2e2e2;
    border-radius: 12px;
    color: #a6a6a6;
  }

  //select-box
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 45px;
    border-radius: 12px;
    .ant-select-selection-placeholder {
      line-height: 45px;
    }
  }
  .ant-select-single .ant-select-selector .ant-select-selection-item,
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 45px;
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
    height: 45px;
  }
  .ant-btn-primary {
    display: block;
    width: 65%;
    height: 45px;
    margin: 0 auto;
    border: none;
    background: #456fc5;
    color: #fff;
  }
  //버튼(입력정보 x)
  .ant-btn-primary[disabled],
  .ant-btn-primary[disabled]:hover,
  .ant-btn-primary[disabled]:focus,
  .ant-btn-primary[disabled]:active {
    background: #e2e2e2;
  }
  @media only screen and (min-width: 415px) {
  }
  @media only screen and (min-width: 769px) {
    #signupFormWrap {
      width: calc(100% + 18px);
      padding: 34px 50px 39px;
      overflow-y: auto;
    }
  }
  @media only screen and (min-width: 1280px) {
  }
`;

export const SignupTitle = styled.div`
  h1 {
    margin-bottom: 29px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 24px;
    color: rgba(4, 66, 191, 0.8);
  }
  p {
    margin-bottom: 15px;
    line-height: 1.5;
    font-size: 1rem;
    color: #595959;
    strong {
      font-weight: bold;
    }
  }
`;
