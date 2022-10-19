import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const ControllerWrapper = styled.nav`
  position: fixed;
  top: 25%;
  transform: translateY(-25%);
  left: 115px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 99;
`;

const CurrentPage = styled.div`
  margin-bottom: 4px;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
`;

const ControllerSeparator = styled.div`
  margin-bottom: 16px;
  width: 2px;
  height: 28px;
  background: ${props => props.theme.colors.secondaryGrey};
`;

const ControllersNavigation = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 18px;
`;

const Controller = styled(NavLink)`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${props => props.theme.colors.secondaryGrey};
  
  &.active {
    background: ${props => props.theme.colors.primary};
  }
`;

export {
  ControllerWrapper,
  CurrentPage,
  ControllerSeparator,
  ControllersNavigation,
  Controller
}
