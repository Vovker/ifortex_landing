import styled, {keyframes} from 'styled-components';
import {Wrapper} from "../main/styled";
import {fadeIn} from "react-animations";

const fadeInAnimation = keyframes(fadeIn);

const SlideWrapper = styled(Wrapper)`
  background: ${props => props.theme.colors.primaryGrey};
  animation: 0.7s ease-in-out ${fadeInAnimation};
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
    font-size: 72px;
    margin-bottom: 80px;
  }
  
  @media (max-width: 480px) {
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 50px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  margin-top: 300px;
  
  @media (max-width: 1920px) {
    margin-top: 150px;
    max-width: 65%;
  }
  
  @media (max-width: 1024px) {
    margin-top: 100px;
    max-width: 90%;
    padding-bottom: 50px;
  }
  
  @media (max-width: 480px) {
    padding: 0 16px 20px 16px;
  }
`;

const ArticlesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  @media (max-width: 1024px) {
    gap: 60px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const ArticleWrapper = styled.div`
  width: 576px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1024px) {
    width: 50%;
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ArticleTitle = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.darkWhite};
  margin-bottom: 52px;
  
  @media (max-width: 1440px) {
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 32px;
  }
  
  @media (max-width: 1024px) {
    font-size: 32px;
    line-height: 44px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const ArticleText = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.darkWhite};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.06em;
  margin-left: 80px;
  height: 150px;
  border-bottom: 6px solid ${props => props.theme.colors.primary};
  
  @media (max-width: 1440px) {
    border-bottom: 4px solid ${props => props.theme.colors.primary};
  }
  
  @media (max-width: 1024px) {
    height: 160px;
    margin-left: 40px;
  }
  
  @media (max-width: 768px) {
    height: 200px;
    margin-left: 20px;
  }
  
  @media (max-width: 480px) {
    padding-bottom: 20px;
    height: auto;
    margin-left: 0;
  }
`;


export {
  SlideWrapper,
  Title,
  ContentWrapper,
  ArticlesWrapper,
  ArticleWrapper,
  ArticleTitle,
  ArticleText
}
