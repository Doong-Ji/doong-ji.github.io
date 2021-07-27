import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'antd';
import { SignupSuccessSection, SuccessTitle, SuccessContents } from './styled';
import styled from '@emotion/styled';

const SignupSuccess: React.FC = () => {
  const history = useHistory();
  const onClickLoginHandler = useCallback(() => {
    history.replace('/signin');
  }, []);
  const onClickMainHandler = useCallback(() => {
    history.replace('/');
  }, []);

  return (
    <SignupSuccessSection>
      <Form>
        <SuccessTitle>환영합니다!</SuccessTitle>
        <SuccessContents>
          <strong>홍길동</strong> 님의 회원가입을 축하드립니다.
        </SuccessContents>
        <SuccessContents>둥지와 함께 하게되어 기뻐요 :)</SuccessContents>

        <Form.Item>
          <Button size="large" shape="round" onClick={onClickMainHandler}>
            메인으로
          </Button>
          <Button type="primary" shape="round" size="large" onClick={onClickLoginHandler}>
            로그인
          </Button>
        </Form.Item>
      </Form>
    </SignupSuccessSection>
  );
};

export default SignupSuccess;
