import styled, {keyframes} from 'styled-components';
import {NavLink} from "react-router-dom";
import {slideInLeft} from "react-animations";

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 24px;
  display: flex;
  justify-content: center;
  z-index: 100;
  
  @media (max-width: 1024px) {
    background: rgba(0, 0, 0, 0.9);
    width: 100vw;
    padding: 8px 0;
    align-items: center;
    top: 0;
  }
`;

const BurgerIcon = styled.img`
  width: 24px;
  position: absolute;
  right: 24px;
`;

const Logo = styled.img`
  width: 138px;
  margin-right: 104px;
  
  @media (max-width: 1024px) {
    margin-right: 0;
  }
`;

const slideLeft = keyframes(slideInLeft);

const LinksWrapper = styled.nav`
  display: ${props => props.isOpened ? 'flex' : 'none'};
  align-items: center;
  gap: 46px;
  
  @media (max-width: 1024px) {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    padding: 24px;
    top: 0;
    flex-direction: column;
    opacity: ${props => props.isOpened ? '1' : '0'};
    transition: opacity 0.5s ease;
    animation: 0.5s ${slideLeft};
  }
`;

const StyledLink = styled(NavLink)`
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.unselectedGrey};
  transition: 0.5s;
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
    text-shadow: 0 0 1px ${props => props.theme.colors.primary};
  }
  
  &.active {
    color: ${props => props.theme.colors.primary};
    text-shadow: 0 0 1px ${props => props.theme.colors.primary};
  }
`;

const Close = styled.img`
  position: absolute;
  right: 48px;
  top: 20px;
  width: 24px;
`;

export {
  HeaderWrapper,
  Logo,
  LinksWrapper,
  StyledLink,
  BurgerIcon,
  Close
}
