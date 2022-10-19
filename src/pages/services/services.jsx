import {ContentWrapper} from "../main/styled";
import {
  ArticlesColumn,
  ArticlesWrapper,
  ArticleText,
  ArticleTitle,
  ArticleWrapper,
  Dash,
  ServicesTitle,
  SlideWrapper
} from "./styled";
import {useEffect} from "react";

export const Services = () => {

  useEffect(() => {
    document.title = "iFortex - Services";
  }, []);

  return (
    <SlideWrapper>
      <ContentWrapper>
        <ServicesTitle>Services</ServicesTitle>
        <ArticlesWrapper>
          <ArticlesColumn>
            <ArticleWrapper>
              <ArticleTitle>Web development</ArticleTitle>
              <ArticleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </ArticleText>
            </ArticleWrapper>
            <ArticleWrapper>
              <ArticleTitle>UX/UI Design</ArticleTitle>
              <ArticleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </ArticleText>
            </ArticleWrapper>
            <ArticleWrapper>
              <ArticleTitle>DevOPS</ArticleTitle>
              <ArticleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  Lorem ipsum dolor sit amet, consectetur adipiscing eli</ArticleText>
            </ArticleWrapper>
          </ArticlesColumn>
          <ArticlesColumn>
            <ArticleWrapper>
              <ArticleTitle>Mobile development</ArticleTitle>
              <ArticleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </ArticleText>
            </ArticleWrapper>
            <ArticleWrapper>
              <ArticleTitle className={'bold'}><Dash/>  Software Testing & QA</ArticleTitle>
              <ArticleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  Lorem ipsum dolor sit amet, consectetur adipiscing eli </ArticleText>
            </ArticleWrapper>
            <ArticleWrapper>
              <ArticleTitle>Machine Learning</ArticleTitle>
              <ArticleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </ArticleText>
            </ArticleWrapper>
          </ArticlesColumn>
        </ArticlesWrapper>
      </ContentWrapper>
    </SlideWrapper>
  );
}
