import styled from '@emotion/styled';

import theme from '@/theme';
export const SignInSection = styled.section`
  position: relative;
  background: linear-gradient(180deg, rgba(89, 168, 241, 0.7), rgba(66, 118, 197, 1));
  min-height: calc(100vw - 190px);
  .bg_login {
    display: none;
  }
  @media only screen and (min-width: 769px) {
    padding: 0 20px;
    min-height: calc(100vh - 80px);
    .bg_login {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: url('/assets/img/bg_login.png') no-repeat center;
      background-size: cover;
    }
  }
`;
export const SignInWrap = styled.div`
  width: 100%;
  padding: 23px 14px 100px;
  margin: 0 auto;
  background-color: #ebeff8;
  text-align: center;
  .ant-row {
    flex-direction: column;
    align-items: center;
  }
  .ant-col {
    width: 100%;
  }
  .login_img_area {
    padding-bottom: 13px;
    img {
      display: block;
      width: 50%;
      margin: 0 auto;
    }
  }
  //인풋
  input {
    height: 45px;
    color: #a6a6a6;
  }
  .ant-input-affix-wrapper {
    padding: 0 11px;
  }
  .ant-form-item {
    margin-bottom: 10px;
  }
  .ant-btn-primary {
    width: 100%;
    height: 45px;
    margin-top: 10px;
    background: #456fc5;
    border-color: #456fc5;
    border-radius: 50px;
  }
  .ant-input-password-icon {
    width: 1em;
    height: 1em;
    background: url('/assets/ico/ico_eye.svg') no-repeat;
    background-size: cover;
    svg {
      display: none;
    }
  }
  .ant-input-password-icon.anticon-eye-invisible {
    svg {
      display: block;
    }
    background: none;
  }
  .ant-input-password-icon:hover {
    color: rgba(0, 0, 0, 0.45);
  }
  //sns
  .sns_title {
    height: 1px;
    margin: 55px 0 24px;
    line-height: 0;
    color: #595959;
    border: 1px solid #ddd;
    span {
      padding: 20px;
      background: #ebeff8;
    }
  }
  .sns_icons {
    display: flex;
    width: 100%;
    padding: 14px 40px;
    justify-content: space-around;
    .sns_link {
      display: block;
      width: 40px;
      height: 40px;
      background-size: cover;
    }
    .to_naver {
      background-image: url('/assets/ico/ico_naver_xl.svg');
    }
    .to_google {
      background-image: url('/assets/ico/ico_google_xl.svg');
    }
    .to_github {
      background-image: url('/assets/ico/ico_github_xl.svg');
    }
    .to_kakao {
      background-image: url('/assets/ico/ico_kakao_xl.svg');
    }
  }
  //login_sub
  .login_sub {
    font-size: 0.8rem;
    text-align: left;
    color: #595959;
    li {
      padding-top: 3vw;
    }
    span {
      margin-right: 5vw;
    }
    a {
      color: #0442bf;
      text-decoration: underline;
    }
  }

  @media only screen and (min-width: 769px) {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    max-width: 800px;
    padding: 0;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: -15px -16px 30px 0 rgb(100 107 172 / 30%), 15px 16px 30px 0 rgb(100 107 172 / 30%);
    .ant-row {
      display: flex;
      flex-direction: row;
    }
    .ant-col {
      width: 50%;
    }
    .login_img_area {
      padding: 30px;
      img {
        width: 100%;
      }
    }
    .login_input_area {
      padding: 49px 44px 49px 49px;
      background: #fff;
    }
    //sns
    .sns_title {
      margin: 37px 0 12px;
      span {
        padding: 20px;
        background: #fff;
      }
    }
    //login_sub
    .login_sub {
      font-size: 0.8rem;
      text-align: left;
      color: #595959;
      li {
        padding-top: 1vw;
      }
      span {
        margin-right: 1vw;
      }
      a {
        color: #0442bf;
        text-decoration: underline;
      }
    }
  }
`;

export const SignInTitle = styled.h1`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 1.4rem;
  color: #595959;
  @media only screen and (min-width: 769px) {
    margin-bottom: 37px;
    text-align: left;
  }
`;
