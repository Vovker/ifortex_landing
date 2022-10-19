import {Header} from '../header/header';
import {PageWrapper, SiteWrapper} from './styled';
import {PageController} from "../pageController/pageController";
import {useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import pages from "../../pages";
import {isMobile} from "react-device-detect";

export const Wrapper = ({ children }) => {

  const blockRef = useRef(null);
  const pageHeight = '1000';

  const navigate = useNavigate();

  const handleScroll = () => {
    if (blockRef.current) {
      const windowOffset = window.pageYOffset;
      const calcPage = Math.floor(windowOffset / pageHeight);
      console.log(calcPage);
      navigate(pages[calcPage]);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SiteWrapper
      onScroll={handleScroll}
      ref={blockRef}
      style={{"---pageHeight": `${pageHeight}px`}}
    >
      <PageWrapper>
        <Header/>
        {
          !isMobile && <PageController/>
        }
        {children}
      </PageWrapper>
    </SiteWrapper>
  );
}
