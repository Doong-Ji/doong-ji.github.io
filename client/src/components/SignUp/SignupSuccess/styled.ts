import styled from '@emotion/styled';
export const SignupSuccessSection = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 50%);
  padding: 46px 18px 54px;
  margin: 0 auto;
  border-radius: 40px;
  width: calc(100% - 30px);
  max-width: 550px;
  background-color: white;
  text-align: center;

  .ant-form-item {
    max-width: 330px;
    margin: 55px auto 0;
  }
  .ant-btn {
    width: 45%;
    max-width: 150px;
    height: 45px;
    color: #595959;
  }
  .ant-btn-primary {
    background: #456fc5;
    color: #fff;
    border: none;
  }
`;

export const SuccessTitle = styled.h1`
  margin-bottom: 46px;
  font-weight: 500;
  font-size: 1.8rem;
  color: #595959;
`;
export const SuccessContents = styled.p`
  strong {
    font-weight: 500;
  }
  font-size: 1.25rem;
  word-break: keep-all;
  color: #595959;
`;
