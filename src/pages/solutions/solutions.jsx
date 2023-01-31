import {
  Dash,
  SlideWrapper,
  Text,
  TextWrapper,
  Title
} from "./styled";
import {useEffect} from "react";
import {ContentWrapper} from "../main/styled";

export const Solutions = () => {

  useEffect(() => {
    document.title = "iFortex - Solutions";
  }, []);

  return (
    <SlideWrapper id={'/solutions'}>
      <ContentWrapper>
        <Title>Solutions for your business</Title>
        <TextWrapper>
          <Dash/>
          <Text>
            Welcome to iFortex, your trusted partner for full-cycle web development. We specialize in creating custom websites and apps that are tailored to meet the unique needs of our clients. Whether you're a startup or an established company, our team of experienced developers can help bring your digital vision to life.
          </Text>
        </TextWrapper>
        <TextWrapper>
          <Dash/>
          <Text>
            At iFortex, we understand that building a website or app can be a daunting task. That's why we take a personalized approach to every project, working closely with our clients to ensure their needs and goals are met. With our comprehensive services, you can focus on growing your business while we handle the technical details.
          </Text>
        </TextWrapper>
        <TextWrapper>
          <Dash/>
          <Text>
            So if you're looking for a reliable and approachable team to help bring your web development ideas to life, look no further than iFortex. <a style={{color: '#F1F1F1'}} href="mailto:sales@ifortex.com">Contact us</a> today to learn more and start your next project.
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </SlideWrapper>
  );
}
