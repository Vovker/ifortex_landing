import styled, {keyframes} from 'styled-components';
import background from '../../assets/solutions_icon.svg';
import {fadeIn} from "react-animations";
import {Wrapper} from "../main/styled";

const fadeInAnimation = keyframes(fadeIn);

const SlideWrapper = styled(Wrapper)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  background: url(${background}) no-repeat 100% 100%;
  animation: 0.7s ease-in-out ${fadeInAnimation};
  
  @media (max-width: 1440px) {
    background-size: 70%;
  }
`;

const Title = styled.div`
  margin-bottom: 130px;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 96px;
  line-height: 112px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  
  @media (max-width: 1440px) {
    font-size: 64px;
    line-height: 72px;
    margin-bottom: 80px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
    line-height: 42px;
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const Dash = styled.div`
  margin-top: 20px;
  min-width: 64px;
  width: 64px;
  height: 5px;
  background: ${props => props.theme.colors.primary};
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const Text = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.darkWhite};
  
  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export {
  SlideWrapper,
  Title,
  Text,
  TextWrapper,
  Dash
}
