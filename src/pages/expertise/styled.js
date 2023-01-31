import styled, {keyframes} from 'styled-components';
import background from '../../assets/expertise_background.webp';
import {Title, Wrapper} from "../main/styled";
import {fadeIn} from "react-animations";

const fadeInAnimation = keyframes(fadeIn);

const SlideWrapper = styled(Wrapper)`
  background: url(${background}) no-repeat 100% 100%; 
  animation: 0.7s ease-in-out ${fadeInAnimation};
  
  @media (max-width: 1440px) {
    background-size: 35%;
  }
  
  @media (max-width: 480px) {
    background-size: 70% auto;
  }
`;

const ExpertiseTitle = styled(Title)`
  margin-bottom: 80px;
  
  @media (max-width: 1440px) {
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 50px;
  }
`;

const DescriptionWrapper = styled.div`
  display: ${props => props.isActive ? 'block' : 'none'};
  margin-left: 200px;
  transition: 0.5s;
  animation: 1.5s ${fadeInAnimation};
  
  @media (max-width: 768px) {
    margin-left: 150px;
  }
  
  @media (max-width: 480px) {
    margin-left: 0;
    margin-bottom: 30px;
  }
`;

const DomainLabel = styled.div`
  display: ${props => props.isActive ? 'block' : 'none'};
  margin-bottom: 30px;
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.darkWhite};
  
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
  
  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 20px;
  }
`;

const DescriptionTitle = styled.div`
  display: flex;
  gap: 16px;
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.darkWhite};
  margin-bottom: 10px;
  align-items: flex-end;
  
  @media (max-width: 1440px) {
    font-size: 36px;
    line-height: 49px;
  }
`;

const Dash = styled.div`
  width: 80px;
  min-width: 80px;
  height: 4px;
  background: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
  
  @media (max-width: 1440px) {
    width: 60px;
    min-width: 60px;
  }
`;

const DescriptionText = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.darkWhite};
  
  @media (max-width: 1440px) {
    font-size: 14px;
    line-height: 19px;
  }
`;

const DomainWrapper = styled.div`
  display: flex;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export {
  SlideWrapper,
  Dash,
  DescriptionTitle,
  DescriptionWrapper,
  ExpertiseTitle,
  DescriptionText,
  DomainLabel,
  DomainWrapper
}
