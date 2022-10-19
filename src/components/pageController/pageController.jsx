import {Controller, ControllerSeparator, ControllersNavigation, ControllerWrapper, CurrentPage} from "./styled";
import {useLocation} from "react-router-dom";
import pages from "../../pages";

export const PageController = () => {

  const currentPath = useLocation().pathname;

  return (
    <ControllerWrapper>
      <CurrentPage>0{pages.indexOf(currentPath) + 1}</CurrentPage>
      <ControllerSeparator/>
      <ControllersNavigation>
        {
          pages.map((page, index) => {
            return (
              <Controller key={index} to={page}/>
            );
          })
        }
      </ControllersNavigation>
    </ControllerWrapper>
  );
}
