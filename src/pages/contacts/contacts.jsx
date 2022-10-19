import {useEffect} from "react";
import {ContactTitle, Description, SlideWrapper} from "./styled";
import {ContentWrapper} from "../main/styled";
import {PrimaryButton} from "../../components/buttons/primary/primaryButton";

export const Contacts = () => {

  useEffect(() => {
    document.title = "iFortex - Contacts";
  }, []);

  return (
    <SlideWrapper>
      <ContentWrapper>
        <ContactTitle>Want to start a project?</ContactTitle>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </Description>
        <PrimaryButton>Contact Us</PrimaryButton>
      </ContentWrapper>
    </SlideWrapper>
  );
}
