import {
    ReviewWrapper,
    ReviewTitle,
    ReviewTextWrapper,
    ReviewText,
    Avatar,
    Quotes,
    CarouselWrapper
} from "./styled";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import quotes from '../../assets/double_quotes.svg';
import avatar1 from '../../assets/reviews/eugene.jpg';
import avatar2 from '../../assets/reviews/michele.jpg';
import avatar3 from '../../assets/reviews/olga.jpg';
import avatar4 from '../../assets/reviews/dmitry.jpg';
import avatar5 from '../../assets/reviews/svetlana.jpg';
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
                interval={4000}
                centerMode={true}
                centerSlidePercentage={100}
            >
                <Review
                    avatar={avatar1}
                    title={
                        <>
                            <a style={{color: "#F1F1F1"}} href="https://www.linkedin.com/in/egrudnitsky/" target="_blank">Eugene Grudnitsky</a>
                            , CEO of H&K Soft Company
                        </>
                    }
                    description={'On behalf of H&K Soft Company, I would like to extend our appreciation to Ifortex for their exceptional work in delivering several financial projects for us. We are extremely satisfied with the results and are looking forward to continuing our partnership for future projects.'}
                />
                <Review
                    avatar={avatar2}
                    title={
                        <>
                            <a style={{color: "#F1F1F1"}} href="https://www.linkedin.com/in/michele-feroli-530a9620a/" target="_blank">Michele Feroli</a>
                            , CEO at SQRD.tech SRL
                        </>
                    }
                    description={'SQRD.tech SRL (Italy) highly recommends Ifortex as a trusted partner for complex fintech projects. The company consistently provides exceptional support and demonstrates a remarkable ability to resolve any issues in a timely manner. We are grateful for Ifortex\'s dedication to ensuring the success of our projects and appreciate their expertise in the field. Thank you for your commitment to excellence!'}
                />
                <Review
                    avatar={avatar3}
                    title={
                        <>
                            <a style={{color: "#F1F1F1"}} href="https://www.linkedin.com/in/olga-ostarhova-%F0%9F%92%9B%F0%9F%92%99-221965227/" target="_blank">Olga Ostrahova</a>
                            , Council Member of SQRD.tech (Latvia)
                        </>
                    }
                    description={'As the Director of the Latvian office of SQRD.tech , I would like to express my heartfelt gratitude and appreciation for the successful collaboration with Ifortex over the long time. The professionalism and dedication demonstrated by the Ifortex team have been truly impressive. I wish Ifortex continued success and prosperity in their future endeavors.'}
                />
                <Review
                    avatar={avatar4}
                    title={
                        <>
                            <a style={{color: "#F1F1F1"}} href="https://www.linkedin.com/in/dmitry-pashkovsky/" target="_blank">Dmitry Pashkovsky</a>
                            , COO of Owl’s group
                        </>
                    }
                    description={'Owls Group gives thanks to Ifortex for developing an application for a private clinic in the USA. Fast, clear, professional. '}
                />
                <Review
                    avatar={avatar5}
                    title={
                        <>
                            <a style={{color: "#F1F1F1"}} href="https://www.linkedin.com/in/svetlana-bronzart-b62002a3" target="_blank">Svetlana Bronzart</a>
                            , CEO of WhiteSnake
                        </>
                    }
                    description={'On behalf of our company, we would like to thank the ifortex team for their professionalism and punctuality. We definitely recommend contacting iFortex for IT solutions of any complexity.'}
                />
            </Carousel>
        </CarouselWrapper>
    );
};
