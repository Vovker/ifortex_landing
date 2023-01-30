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
            <ArticleTitle>30+ completed projects</ArticleTitle>
            <ArticleText>
              With over 30 successful projects under our belt, we've established ourselves as a leading provider of web and mobile development services. From small startups to large enterprises, we've helped businesses from all over the world bring their digital visions to life.
            </ArticleText>
          </ArticleWrapper>
          <ArticleWrapper>
            <ArticleTitle>5 years on the IT market</ArticleTitle>
            <ArticleText>
              With 5 years of experience in the IT industry, we've honed our skills and developed a deep understanding of what it takes to create successful digital solutions. Our team is comprised of experts in web development, mobile development, and beyond, and we're dedicated to delivering results for our clients.
            </ArticleText>
          </ArticleWrapper>
        </ArticlesWrapper>
      </ContentWrapper>
    </SlideWrapper>
  );
}
