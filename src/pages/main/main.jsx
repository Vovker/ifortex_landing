import React from "react";
import {ContentWrapper, Title, Wrapper} from "./styled";
import {PrimaryButton} from "../../components/buttons/primary/primaryButton";

export const Main = React.memo(() => {

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Quality software solutions</Title>
        <PrimaryButton>Contact Us</PrimaryButton>
      </ContentWrapper>
    </Wrapper>
  );
});
