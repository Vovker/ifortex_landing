import styled, {keyframes} from 'styled-components';
import {fadeInDown} from 'react-animations';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: ${props => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const logoAnimation = keyframes(fadeInDown);

const Logo = styled.img`

  @keyframes moveTop {
    0% {
      transform: translateY(0);
    }

    100% {
      position: fixed;
      margin-left: -1000px;
      margin-top: -2000px;
      width: 138px;
    }
  }

  @keyframes moveTopMobile {
    0% {
      transform: translateY(0);
    }

    100% {
      position: fixed;
      margin-top: -1000px;
      width: 138px;
    }
  }
  
  width: 400px;
  animation: 1s ${logoAnimation} forwards,
  1s moveTop 1.8s forwards;
  
  @media (max-width: 480px) {
    width: 200px;
    animation: 1s ${logoAnimation} forwards,
    1.15s moveTopMobile 1.8s forwards;
  }
;
`;

const TextWrapper = styled.div`
  
  @keyframes hide {
    0% {
      opacity: 1;
    }
    
    100% {
      opacity: 0;
    }
  }
  
  display: flex;
  gap: 40px;
  animation: 1.15s hide 1s forwards;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: unset;
  }
`;

const Text = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.darkWhite};
  opacity: 0;
  
  
  &:nth-child(1) {
    animation: 0.7s ${logoAnimation} 0.3s forwards;
  }
  
  &:nth-child(2) {
    animation: 0.7s ${logoAnimation} 0.6s forwards;
  }
  
  &:nth-child(3) {
    animation: 0.7s ${logoAnimation} 0.9s forwards;
  }
  
  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 44px;
  }
`;



export {
  Wrapper,
  Logo,
  Text,
  TextWrapper
};
