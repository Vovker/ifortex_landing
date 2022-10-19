import styled from "styled-components";
import {ContentWrapper, Title, Wrapper} from "../main/styled";

const SlideWrapper = styled(Wrapper)`
  background: ${props => props.theme.colors.primaryGrey};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ReviewsContentWrapper = styled(ContentWrapper)`
  max-width: 100%;
  justify-content: flex-start;
`;

const ReviewsTitle = styled(Title)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 200px auto;

  @media (max-width: 1440px) {
    max-width: 65%;
  }

  @media (max-width: 1024px) {
    max-width: 90%;
    margin: 0 auto 100px auto;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    padding: 0 16px 20px 16px;
  }
`;

export {
  SlideWrapper,
  ReviewsTitle,
  ReviewsContentWrapper
}
