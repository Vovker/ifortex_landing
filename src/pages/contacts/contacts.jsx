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
        <Description>
          Ready to take your business to the next level with a custom website or app? We'd love to hear from you! Fill out the form on this page or use the information below to get in touch with us.
          <br/>
          <br/>
          Our team is available to answer any questions and provide a quote for your project. We look forward to helping you bring your digital vision to life. Contact us today!
        </Description>
        <PrimaryButton>Contact Us</PrimaryButton>
      </ContentWrapper>
    </SlideWrapper>
  );
}
