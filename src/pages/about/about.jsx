import {
  ArticlesWrapper,
  ArticleText,
  ArticleTitle,
  ArticleWrapper,
  ContentWrapper,
  SlideWrapper,
  Title
} from "./styled";
import {useEffect} from "react";

export const About = () => {

  useEffect(() => {
    document.title = "iFortex - About";
  }, []);

  return (
    <SlideWrapper>
      <ContentWrapper>
        <Title>About</Title>
        <ArticlesWrapper>
          <ArticleWrapper>
            <ArticleTitle>100+ completed projects</ArticleTitle>
            <ArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            </ArticleText>
          </ArticleWrapper>
          <ArticleWrapper>
            <ArticleTitle>10 years on the IT market</ArticleTitle>
            <ArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </ArticleText>
          </ArticleWrapper>
        </ArticlesWrapper>
      </ContentWrapper>
    </SlideWrapper>
  );
}
