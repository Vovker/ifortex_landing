import styled from 'styled-components';

const SiteWrapper = styled.div`
  overflow-x: hidden;
  height: calc(var(---pageHeight) * 8);
  position: relative;
`;

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #000000;
  
  @media (max-width: 1024px) {
    position: relative;
    width: 100%;
    min-height: 100vh;
    height: auto;
  }
`;

export {
  PageWrapper,
  SiteWrapper
}
