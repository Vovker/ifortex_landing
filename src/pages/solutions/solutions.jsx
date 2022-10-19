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
    <SlideWrapper>
      <ContentWrapper>
        <Title>Solutions for your business</Title>
        <TextWrapper>
          <Dash/>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </SlideWrapper>
  );
}
