import styled, {keyframes} from 'styled-components';
import {Title} from "../main/styled";
import {Wrapper} from "../main/styled";
import {fadeIn} from "react-animations";

const fadeInAnimation = keyframes(fadeIn);


const SlideWrapper = styled(Wrapper)`
  background: unset;
  animation: 0.7s ease-in-out ${fadeInAnimation};
`;

const ServicesTitle = styled(Title)`
  margin-bottom: 100px;
  
  @media (max-width: 1440px) {
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 50px;
  }
`;

const ArticlesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  
  @media (max-width: 1440px) {
    gap: 60px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ArticlesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  
  @media (max-width: 1440px) {
    gap: 30px;
  }
`;

const ArticleWrapper = styled.div`
  width: 510px;
  
  @media (max-width: 1440px) {
    width: 100%;
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ArticleTitle = styled.div`
  margin-bottom: 8px;
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.darkWhite};
  
  &.bold{
    margin-bottom: 28px;
    font-size: 30px;
    line-height: 41px;
    display: flex;
    align-items: center;
    gap: 16px;
    
    @media (max-width: 1440px) {
      margin-bottom: 20px;
      font-size: 24px;
      line-height: 33px;
    }
  }
  
  @media (max-width: 1440px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const Dash = styled.div`
  width: 80px;
  min-width: 80px;
  height: 4px;
  background: ${props => props.theme.colors.primary};
  
  @media (max-width: 1440px) {
    width: 70px;
    min-width: 70px;
  }
  
  @media(max-width: 480px){
    width: 40px;
    min-width: 40px;
  }
`;

const ArticleText = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.darkWhite};
`;

export {
  SlideWrapper,
  ServicesTitle,
  ArticlesWrapper,
  ArticlesColumn,
  ArticleWrapper,
  ArticleTitle,
  ArticleText,
  Dash
}
