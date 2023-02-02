import React from "react";
import {ContentWrapper, Title, Wrapper} from "./styled";
import {PrimaryButton} from "../../components/buttons/primary/primaryButton";
import {useNavigate} from "react-router-dom";
import {isMobile} from "react-device-detect";

export const Main = React.memo(() => {

    const navigate = useNavigate();

  return (
    <Wrapper id={'/'}>
      <ContentWrapper>
        <Title>Quality software solutions</Title>
        <PrimaryButton
            onClick={(e) => {
                e.preventDefault();
                if(!isMobile) {
                    navigate('/contacts');
                } else {
                    window.scrollTo(0, document.body.scrollHeight - 150);
                }
            }}
        >
            Contact Us
        </PrimaryButton>
      </ContentWrapper>
    </Wrapper>
  );
});
