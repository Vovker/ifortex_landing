import {
  ReviewWrapper,
  ReviewTitle,
  ReviewTextWrapper,
  ReviewText,
  Avatar, Quotes, CarouselWrapper
} from "./styled";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import quotes from '../../assets/double_quotes.svg';
import {isMobile} from "react-device-detect";

export const Review = ({avatar, title, description}) => {
  return (
    <ReviewWrapper>
      <Avatar src={avatar}/>
      <Quotes
        src={quotes}
      />
      <ReviewTextWrapper>
        <ReviewTitle>{title}</ReviewTitle>
        <ReviewText>{description}</ReviewText>
      </ReviewTextWrapper>
      <Quotes
        src={quotes}
        rotated
      />
    </ReviewWrapper>
  )
}

export const ReviewsCarousel = () => {
  return (
    <CarouselWrapper>
      <Carousel
        autoPlay={true}
        animationSpeed={1000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={true}
        interval={5000}
        centerMode={true}
        centerSlidePercentage={isMobile ? 100 : 100}
      >
        <Review
          avatar={'https://www.w3schools.com/howto/img_avatar.png'}
          title={'Lorem ipsum dolor sit amet'}
          description={'Lorem ipsum dolor sit amet,  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        />
        <Review
          avatar={'https://www.w3schools.com/howto/img_avatar.png'}
          title={'Lorem ipsum dolor sit amet'}
          description={'Lorem ipsum dolor sit amet,  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        />
        <Review
          avatar={'https://www.w3schools.com/howto/img_avatar.png'}
          title={'Lorem ipsum dolor sit amet'}
          description={'Lorem ipsum dolor sit amet,  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        />
        <Review
          avatar={'https://www.w3schools.com/howto/img_avatar.png'}
          title={'Lorem ipsum dolor sit amet'}
          description={'Lorem ipsum dolor sit amet,  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        />
        <Review
          avatar={'https://www.w3schools.com/howto/img_avatar.png'}
          title={'Lorem ipsum dolor sit amet'}
          description={'Lorem ipsum dolor sit amet,  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        />
        <Review
          avatar={'https://www.w3schools.com/howto/img_avatar.png'}
          title={'Lorem ipsum dolor sit amet'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing el'}
        />
        <Review
          avatar={'https://www.w3schools.com/howto/img_avatar.png'}
          title={'Lorem ipsum dolor sit amet'}
          description={'Lorem ipsum dolor sit amet, consectetcididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        />
      </Carousel>
    </CarouselWrapper>
  );
};
