import styled from "styled-components";

const ContactUsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const SocialWrapper = styled.a`
  width: 64px;
  height: 64px;
  min-height: 40px;
  min-width: 40px;
  transition: 0.5s;
  
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const SocialIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export {
    ContactUsWrapper,
    SocialWrapper,
    SocialIcon
}
