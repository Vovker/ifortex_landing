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
      description: 'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies, from payments to wealth management. Let us help you revolutionize the financial industry.'
    },
    {
      title: 'Logistics',
      description: 'Streamline your logistics operations with custom software solutions. Our team can help you create an efficient and effective supply chain management system, from tracking shipments to managing inventory. Get ready to see your operations soar.'
    },
    {
      title: 'E-commerce',
      description: 'Boost your sales with a custom e-commerce solution. Our team can help you create an online store that\'s optimized for sales and easy to use, from product listings to checkout. Get ready to take your business to the next level.'
    },
    {
      title: 'Healthcare',
      description: 'Improve patient outcomes with innovative healthcare solutions. Our team has extensive experience in creating custom web and mobile applications for the healthcare industry, from electronic medical records to telemedicine. Let us help you make a difference in people\'s lives.'
    },
    {
      title: 'Travel',
      description: 'Transform the travel industry with cutting-edge digital solutions. Our team can help you create custom web and mobile applications for the travel industry, from booking systems to destination guides. Get ready to see your business soar.'
    },
    {
      title: 'Education',
      description: 'Empower students and teachers with custom education solutions. Our team can help you create digital learning tools, from online course platforms to educational games. Let us help you make a difference in the world of education.'
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
