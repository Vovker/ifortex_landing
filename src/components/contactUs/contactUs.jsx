import {ContactUsWrapper, SocialIcon, SocialWrapper} from "./styled";
import {PrimaryButton} from "../buttons/primary/primaryButton";
import linkedinIcon from '../../assets/linkedin.svg';
import telegramIcon from '../../assets/telegram.svg';

export const ContactUs = () => {
    return (
        <ContactUsWrapper>
            <PrimaryButton>Contact via email</PrimaryButton>
            <SocialWrapper href={'https://linkedin.com/company/ifortex'} target={'_blank'}>
                <SocialIcon src={linkedinIcon}/>
            </SocialWrapper>
            <SocialWrapper href={'https://t.me/iFortexTeam'} target={'_blank'}>
                <SocialIcon src={telegramIcon}/>
            </SocialWrapper>z
        </ContactUsWrapper>
    );
}
