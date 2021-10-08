import styled from 'styled-components';
import StyledButton from '../components/StyledButton';
import StyledDiv from '../components/StyledDiv';
import StyledLink from '../components/StyledLink';
import StyledInput from '../components/StyledInput';

const Background = styled(StyledDiv)`
  height: 100vh;
  width: 100vw;
`;

const OuterContainer = styled(StyledDiv)`
  height: 55rem;
  width: 100rem;
  background-color: black;
`;

const InnerContainer = styled(StyledDiv)`
  height: 50rem;
  width: 45rem;
  flex-direction: column;
  background-color: white;
`;

const LoginTextBox = styled(StyledDiv)`
  margin: 1rem;
  height: 5rem;
  width: 40rem;
  background-color: gray;
`;

const InfoBox = styled(StyledDiv)`
  margin: 1rem;
  height: 10rem;
  width: 50rem;
  flex-direction: column;
`;

const InputEmailContainer = styled(StyledDiv)`
  margin: 0.5rem;
`;

const EmailBox = styled(StyledDiv)`
  height: 2rem;
  width: 3rem;
`;

const InputEmailBox = styled(StyledInput)``;

const InputPWContainer = styled(InputEmailContainer)``;

const PWBox = styled(EmailBox)``;

const InputPWBox = styled(StyledInput)``;

const SignupContainer = styled(StyledDiv)`
  margin: 1rem;
  height: 5rem;
  width: 40rem;
  background-color: gray;
`;

const SignupBox = styled(StyledDiv)`
  height: 2rem;
  width: 5rem;
`;

const ButtonContainer = styled(StyledDiv)``;

const LoginBtn = styled(StyledButton)``;

const SocialLoginBtn = styled(StyledButton)``;

export default function Login() {
  return (
    <Background>
      <OuterContainer>
        <InnerContainer>
          <LoginTextBox>로그인</LoginTextBox>
          <InfoBox>
            <InputEmailContainer>
              <EmailBox>Email</EmailBox>
              <InputEmailBox />
            </InputEmailContainer>
            <InputPWContainer>
              <PWBox>PW</PWBox>
              <InputPWBox />
            </InputPWContainer>
          </InfoBox>
          <SignupContainer>
            아이디가 없으신가요 ?
            <SignupBox>
              <StyledLink to='/signup'> 회원가입 </StyledLink>
            </SignupBox>
          </SignupContainer>
          <ButtonContainer>
            <LoginBtn>로그인</LoginBtn>
            <SocialLoginBtn>소셜 로그인</SocialLoginBtn>
          </ButtonContainer>
        </InnerContainer>
      </OuterContainer>
    </Background>
  );
}
