import styled, {keyframes} from "styled-components";
import background from "../../assets/main_background.jpg";
import {fadeIn} from "react-animations";

const fadeInAnimation = keyframes(fadeIn);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${background}) no-repeat center;
  background-size: cover;
  position: relative;
  animation: 0.7s ease-in-out ${fadeInAnimation};
  display: flex;
  justify-content: center;
  
  @media (max-width: 1024px) {
    min-height: 100vh;
    justify-content: center;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 220px;
  
  @media (max-width: 1900px) {
    max-width: 65%;
    margin-top: 100px;
  }
  
  @media (max-width: 1024px) {
    max-width: 90%;
    margin-top: 100px;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    padding: 0 16px 20px 16px;
  }
`;

const Title = styled.div`
  margin-bottom: 72px;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 96px;
  line-height: 112%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  
  @media (max-width: 1440px) or (max-height: 1024px) {
    font-size: 64px;
    margin-bottom: 50px;
  }
  
  @media (max-width: 480px) {
    font-size: 36px;
    line-height: 42px;
    text-align: center;
  }
`;

export {
  Wrapper,
  ContentWrapper,
  Title
}
