import { FC, useState, useCallback } from 'react';
import { SignupBackground } from './styled';
import useValidator from '@/hooks/useValidator';
import { isName, isEmail, isPassword, isNickname } from '@/utils/validators';
import SignupSuccess from '@/components/SignUp/SignupSuccess/SignupSuccess';
import SignupForm from '@/components/SignUp/SignupProcess/SignupForm';

const Signup: FC = () => {
  const [name, , onChangeName, isNameValid] = useValidator('', isName);
  const [email, , onChangeEmail, isEmailValid] = useValidator('', isEmail);
  const [password, , onChangePassword, isPasswordValid] = useValidator('', isPassword); //패스워드 체크
  const [passwordConfirm, setPasswordConfirm] = useState(''); //패스워드 재 확인
  const [isPasswordReValid, setIsPasswordReValid] = useState(false);
  const [nickname, , onChangeNickname, isNicknameValid] = useValidator('', isNickname); //닉네임 체크
  const [part, setPart] = useState(''); //파트설정
  const [signupSuccess, setSignupSuccess] = useState(false);

  const onChangePasswordReHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordConfirm(e.target.value);
      setIsPasswordReValid(e.target.value === password);
    },
    [password],
  );

  //signup 성공 상태처리
  const onClickSuccessSignup = useCallback(() => {
    setSignupSuccess((prev) => !prev);
  }, []);

  const onChangePart = useCallback(
    (value: string) => {
      setPart(value);
    },
    [part],
  );
  return (
    <SignupBackground>
      <div className="signup_background_bottom">
        {signupSuccess ? (
          <SignupSuccess />
        ) : (
          <SignupForm
            name={name}
            email={email}
            password={password}
            passwordConfirm={passwordConfirm}
            nickname={nickname}
            part={part}
            isNameValid={isNameValid}
            isEmailValid={isEmailValid}
            isPasswordValid={isPasswordValid}
            isPasswordReValid={isPasswordReValid}
            isNicknameValid={isNicknameValid}
            onChangeName={onChangeName}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onChangePasswordReHandler={onChangePasswordReHandler}
            onChangeNickname={onChangeNickname}
            onClickSuccessSignup={onClickSuccessSignup}
            onChangePart={onChangePart}
          />
        )}
      </div>
    </SignupBackground>
  );
};

export default Signup;
