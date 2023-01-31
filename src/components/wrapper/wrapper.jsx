import {Header} from '../header/header';
import {PageWrapper, SiteWrapper} from './styled';
import {PageController} from "../pageController/pageController";
import {useCallback, useLayoutEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import pages from "../../pages";
import {isMobile} from "react-device-detect";

export const pageHeight = '1200';
export const Wrapper = ({children}) => {

  const blockRef = useRef(null);

  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    if (blockRef.current) {
      if(pages[~~((window.pageYOffset + 0.5 * pageHeight) / pageHeight)] !== window.location.pathname)
        navigate(pages[~~((window.pageYOffset + 0.5 * pageHeight) / pageHeight)]);
    }
  }, [navigate]);

  useLayoutEffect(() => {
    if(!isMobile) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);

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
