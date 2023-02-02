import styled from 'styled-components';
const ButtonWrapper = styled.a`
  width: 260px;
  height: 64px;
  background: ${props => props.theme.colors.primary};
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.primaryGrey};
  transition: 0.5s;
  text-decoration: none;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export {ButtonWrapper};
