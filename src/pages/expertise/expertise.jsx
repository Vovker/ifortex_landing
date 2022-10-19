import {
  Dash, DescriptionText,
  DescriptionTitle,
  DescriptionWrapper, DomainLabel, DomainWrapper,
  ExpertiseTitle,
  SlideWrapper
} from "./styled";
import {ContentWrapper} from "../main/styled";
import {useEffect, useState} from "react";

export const Expertise = () => {

  useEffect(() => {
    document.title = "iFortex - Expertise";
  }, []);

  const data = [
    {
      title: 'FinTech',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim '
    },
    {
      title: 'Logistics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim '
    },
    {
      title: 'E-commerce',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim '
    },
    {
      title: 'Healthcare',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim '
    },
    {
      title: 'Travel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim '
    },
    {
      title: 'Education',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim '
    }
  ];

  const [selected, setSelected] = useState(0);

  return (
    <SlideWrapper>
      <ContentWrapper>
        <ExpertiseTitle>Expertise</ExpertiseTitle>
        {
          data.map((item, index) => (
            <DomainWrapper>
              <DomainLabel
                isActive={selected !== index}
                onClick={() => setSelected(index)}
              >
                {item.title}
              </DomainLabel>
              <DescriptionWrapper isActive={selected === index}>
                <DescriptionTitle>
                  <Dash/> {item.title}
                </DescriptionTitle>
                <DescriptionText>
                  {item.description}
                </DescriptionText>
              </DescriptionWrapper>
            </DomainWrapper>
          ))
        }
      </ContentWrapper>
    </SlideWrapper>
  );
}
