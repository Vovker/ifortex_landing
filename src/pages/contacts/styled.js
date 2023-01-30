import styled, {keyframes} from "styled-components";
import {Title, Wrapper} from "../main/styled";
import {fadeIn} from "react-animations";
import background from "../../assets/contact_background.webp";

const fadeInAnimation = keyframes(fadeIn);

const SlideWrapper = styled(Wrapper)`
  background: url(${background}) no-repeat 100% 100%;
  animation: 0.7s ease-in-out ${fadeInAnimation};
  @media (max-width: 1920px) {
    background-size: 50% auto;
  }
`;

const ContactTitle = styled(Title)`
  margin-bottom: 120px;
  
  @media (max-width: 1440px) {
    margin-bottom: 80px;
  }
`;

const Description = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.darkWhite};
  margin-bottom: 150px;
  
  @media (max-width: 1440px) {
    margin-bottom: 100px;
  }
`;


export {
  SlideWrapper,
  ContactTitle,
  Description
}
