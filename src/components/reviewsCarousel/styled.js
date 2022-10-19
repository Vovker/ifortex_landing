import styled from 'styled-components';

const ReviewWrapper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  padding: 0 80px;
  
  @media (max-width: 1440px) {
    padding: 0 40px;
  }
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Quotes = styled.img`
  width: 72px !important;
  transform: rotate(${props => props.rotated ? 180 : 0}deg);
  margin-top: ${props => props.rotated ? 0 : 60}px;
  margin-bottom: ${props => props.rotated ? 60 : 0}px;
  
  @media (max-width: 1440px) {
    width: 64px !important;
  }
  
  @media (max-width: 1024px) {
    width: 48px !important;
    margin-top: ${props => props.rotated ? 0 : 70}px;
    margin-bottom: ${props => props.rotated ? 70 : 0}px;
  }
  
  @media (max-width: 768px) {
    width: 40px !important;
    margin-top: ${props => props.rotated ? 0 : 110}px;
    margin-bottom: ${props => props.rotated ? 110 : 0}px;
  }
`;

const Avatar = styled.div`
  width: 79px;
  height: 79px;
  min-height: 79px;
  min-width: 79px;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
  border-bottom-right-radius: 50%;
  border-color: ${props => props.theme.colors.primaryGrey};
  margin-right: 45px;
  
  @media (max-width: 1440px) {
    width: 70px;
    height: 70px;
    min-height: 70px;
    min-width: 70px;
    margin-right: 40px;
  }
  
  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
    min-height: 60px;
    min-width: 60px;
    margin-right: 30px;
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    min-height: 50px;
    min-width: 50px;
    margin-right: 10px;
  }
`;

const ReviewTextWrapper = styled.div`
  margin: 0 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 1440px) {
    margin: 0 40px;
  }
  
  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;

const ReviewTitle = styled.div`
  margin-bottom: 17px;
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.06em;
  text-align: left;
  color: ${props => props.theme.colors.darkWhite};
  
  @media (max-width: 1024px) {
    margin-bottom: 12px;
    font-size: 20px;
    line-height: 27px;
  }
`;

const ReviewText = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.darkWhite};
  text-align: left;
  
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const CarouselWrapper = styled.div`

  .carousel-root {
    .carousel-slider {
      height: 305px;
      
      .control-dots {
        .dot {
          width: 16px;
          height: 16px;
          border-radius: 0;
          margin: 0 5px;
        }
      }
    }
    
    .slide {
      opacity: 0.3;
    }
    .slide.selected {
      opacity: 1;
    }
  }
`;

export {
  ReviewWrapper,
  Avatar,
  ReviewTextWrapper,
  ReviewTitle,
  ReviewText,
  Quotes,
  CarouselWrapper
}


