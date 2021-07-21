import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { SignInSection, SignInWrap, SignInTitle } from './styled';
import useChange from '@/hooks/useChange';
import { Form, Input, Button, Checkbox, Row, Col, message } from 'antd';

const Signin = () => {
  const history = useHistory();
  const [email, setEmail, onChangeEmail] = useChange('');
  const [password, setPassword, onChangePassword] = useChange('');
  const onClickSignIn = useCallback(() => {}, [email, password]);
  return (
    <SignInSection>
      <div className="bg_login"></div>
      <SignInWrap>
        <Row>
          <Col className="login_img_area">
            <img src="/assets/img/img_login.png" />
          </Col>
          <Col className="login_input_area">
            <SignInTitle>LOGIN</SignInTitle>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
              >
                <Input className="input_round" placeholder="아이디" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input.Password className="input_round" type="password" placeholder="비밀번호" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  로그인
                </Button>
              </Form.Item>
            </Form>

            <div className="sns_area">
              <h3 className="sns_title">
                <span>간편하게 SNS 로그인</span>
              </h3>
              <div className="sns_icons">
                <a className="sns_link to_naver" href=""></a>
                <a className="sns_link to_google" href=""></a>
                <a className="sns_link to_github" href=""></a>
                <a className="sns_link to_kakao" href=""></a>
              </div>
            </div>
            <ul className="login_sub">
              <li>
                <span>비밀번호가 기억나지 않으시나요?</span>
                <a className="login-form-forgot" href="">
                  비밀번호 찾기
                </a>
              </li>
              <li>
                <span>아직 계정이 없으시다구요?</span>
                <a href="">회원가입</a>
              </li>
            </ul>
          </Col>
        </Row>
      </SignInWrap>
    </SignInSection>
  );
};

export default Signin;
