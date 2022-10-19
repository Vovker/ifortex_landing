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

export const Header = () => {

  const [isOpened, setIsOpened] = useState(false);

  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Link to="/">
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
        <StyledLink to={'/solutions'}>Solutions</StyledLink>
        <StyledLink to={'/about'}>About</StyledLink>
        <StyledLink to={'/services'}>Services</StyledLink>
        <StyledLink to={'/technologies'}>Technologies</StyledLink>
        <StyledLink to={'/expertise'}>Expertise</StyledLink>
        <StyledLink to={'/reviews'}>Reviews</StyledLink>
        <StyledLink to={'/contacts'}>Contacts</StyledLink>
      </LinksWrapper>
    </HeaderWrapper>
  );
}
