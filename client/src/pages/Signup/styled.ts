import styled from '@emotion/styled';

export const SignupBackground = styled.div`
  background: linear-gradient(180deg, rgba(89, 168, 241, 0.7), rgba(66, 118, 197, 1));

  .signup_background_bottom {
    position: relative;
    height: calc(100vh - 60px);
    padding: 40px 15px;
    background: none;
  }
  @media only screen and (min-width: 415px) {
  }

  @media only screen and (min-width: 769px) {
    height: calc(100vh - 80px);
    .signup_background_bottom {
      width: 100%;
      background: url('/assets/img/bg_signup_bottom.png') no-repeat;
      background-size: 100%;
      background-position: 0 100%;
    }
  }

  @media only screen and (min-width: 1280px) {
  }
`;
