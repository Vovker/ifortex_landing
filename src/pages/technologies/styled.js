import styled, {keyframes} from "styled-components";
import {Wrapper} from "../main/styled";
import {Title} from "../main/styled";
import {fadeIn} from "react-animations";

const fadeInAnimation = keyframes(fadeIn);

const SlideWrapper = styled(Wrapper)`
  background: ${props => props.theme.colors.primaryGrey};
  animation: 1s ${fadeInAnimation};
`;

const TechnologiesTitle = styled(Title)`
  margin-bottom: 60px;
  
  @media (max-width: 1440px) {
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 50px;
    font-size: 36px;
    line-height: 42px;
  }
`;

const TechnologiesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 60px;
  
  @media (max-width: 1920px) {
    row-gap: 40px;
    column-gap: 40px;
    grid-template-rows: 0fr 1fr;
  }
  
  @media (max-width: 860px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
  }
  
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const TechnologiesArticleWrapper = styled.div`
  max-width: 350px;
`;

const TechnologiesArticleTitle = styled.div`
  margin-bottom: 20px;
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.darkWhite};
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const TechnologyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  width: 70px;
  height: 70px;
  
  @media (max-width: 1440px) {
    width: 60px;
    height: 50px;
  }
  
  @media (max-width: 480px) {
    width: 70px;
  }
`;

const TechnologyIcon = styled.img`
  height: 30px;
  max-width: 60px;
  
  @media (max-width: 1440px) {
    height: 20px;
    max-width: 40px;
  }
`;

const TechnologyTitle = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.darkWhite};
`;

export {
  SlideWrapper,
  TechnologiesTitle,
  TechnologiesWrapper,
  TechnologiesArticleWrapper,
  TechnologiesArticleTitle,
  TechnologyWrapper,
  TechnologyIcon,
  TechnologyTitle,
  TechnologiesList
}
