import {
  Logo,
  Wrapper,
  Text,
  TextWrapper
} from "./styled";
import logo from '../../assets/logo_clear.svg';

export const Starter = () => {

  return(
    <Wrapper>
      <Logo src={logo}/>
      <TextWrapper>
        <Text>QUALITY</Text>
        <Text>SOFTWARE</Text>
        <Text>SOLUTIONS</Text>
      </TextWrapper>
    </Wrapper>
  );
};
