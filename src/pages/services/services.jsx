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
              <ArticleText>
                Bring your website to life with our expert web development services. Our team can create custom, responsive websites that are tailored to meet the unique needs of your business. From design to deployment, we've got you covered.
              </ArticleText>
            </ArticleWrapper>
            <ArticleWrapper>
              <ArticleTitle>UX/UI Design</ArticleTitle>
              <ArticleText>
                Make a lasting impression with a beautiful and intuitive website or app design. Our UX/UI experts can help you create a user-centered design that not only looks good, but is easy to use. Get ready to see your conversion rates soar.
              </ArticleText>
            </ArticleWrapper>
            <ArticleWrapper>
              <ArticleTitle>DevOPS</ArticleTitle>
              <ArticleText>
                Streamline your development and deployment process with our DevOps services. Our experts can help you automate your infrastructure and optimize your workflow for maximum efficiency and scalability.
              </ArticleText>
            </ArticleWrapper>
          </ArticlesColumn>
          <ArticlesColumn>
            <ArticleWrapper>
              <ArticleTitle>Mobile development</ArticleTitle>
              <ArticleText>
                Stay ahead of the curve with a custom mobile app. Our mobile development experts can create an app that's optimized for both iOS and Android, ensuring a seamless user experience for all your customers. Let us help you take your business to the next level.
              </ArticleText>
            </ArticleWrapper>
            <ArticleWrapper>
              <ArticleTitle className={'bold'}><Dash/>  Software Testing & QA</ArticleTitle>
              <ArticleText>
                Ensure the quality and reliability of your website or app with our comprehensive software testing services. Our QA team will thoroughly test your product to identify and resolve any bugs or issues before launch.
              </ArticleText>
            </ArticleWrapper>
            <ArticleWrapper>
              <ArticleTitle>Machine Learning</ArticleTitle>
              <ArticleText>
                Unlock the potential of artificial intelligence with our machine learning services. Our team can help you build custom machine learning models for your business, from computer vision to natural language processing.
              </ArticleText>
            </ArticleWrapper>
          </ArticlesColumn>
        </ArticlesWrapper>
      </ContentWrapper>
    </SlideWrapper>
  );
}
