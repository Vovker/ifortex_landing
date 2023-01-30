import {
  HeaderWrapper,
  LinksWrapper,
  Logo,
  StyledLink,
  BurgerIcon, Close
} from "./styled";
import logo from "../../assets/logo.svg";
import {Link, useNavigate} from "react-router-dom";
import {isMobile} from "react-device-detect";
import burgerIcon from "../../assets/burger.svg";
import {useState} from "react";
import closeIcon from "../../assets/close.svg";
import pages from "../../pages";
import {pageHeight} from "../wrapper/wrapper";

export const Header = () => {

  const [isOpened, setIsOpened] = useState(false);

  const navigate = useNavigate();

 const handleRedirect = (url) => {
     const index = pages.findIndex(page => page === url);
     window.scrollTo(0, index * pageHeight);
 }

  return (
    <HeaderWrapper>
      <Link to="/" onClick={() => handleRedirect('/')}>
        <Logo src={logo} alt="logo" onClick={() => navigate('/')} />
      </Link>
      {
        isMobile && <BurgerIcon
          src={burgerIcon}
          onClick={() => setIsOpened(true)}
        />
      }
      <LinksWrapper isOpened={!isMobile ? true : isOpened} onClick={() => setIsOpened(false)}>
        {
          isMobile && <Close
            onClick={() => setIsOpened(false)}
            src={closeIcon}
          />
        }
        <StyledLink to={'/solutions'} onClick={() => handleRedirect('/solutions')}>Solutions</StyledLink>
        <StyledLink to={'/about'} onClick={() => handleRedirect('/about')}>About</StyledLink>
        <StyledLink to={'/services'} onClick={() => handleRedirect('/services')}>Services</StyledLink>
        <StyledLink to={'/technologies'} onClick={() => handleRedirect('/technologies')}>Technologies</StyledLink>
        <StyledLink to={'/expertise'} onClick={() => handleRedirect('/expertise')}>Expertise</StyledLink>
        <StyledLink to={'/reviews'} onClick={() => handleRedirect('/reviews')}>Reviews</StyledLink>
        <StyledLink to={'/contacts'} onClick={() => handleRedirect('/contacts')}>Contacts</StyledLink>
      </LinksWrapper>
    </HeaderWrapper>
  );
}
