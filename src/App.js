import {Wrapper} from "./components/wrapper/wrapper";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main} from "./pages/main/main";
import {About} from "./pages/about/about";
import {Services} from "./pages/services/services";
import {Solutions} from "./pages/solutions/solutions";
import {Technologies} from "./pages/technologies/technologies";
import {Expertise} from "./pages/expertise/expertise";
import {Reviews} from "./pages/reviews/reviews";
import {Contacts} from "./pages/contacts/contacts";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import {useEffect, useState} from "react";
import {Starter} from "./components/starter/starter";

function App() {

  const [isStarter, setIsStarter] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsStarter(false);
    }, 2200)
  }, []);

  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {
            isStarter ?
              <Starter/> :
              <Wrapper>
                <Routes>
                  <Route path={"/"} exact element={<Main/>}/>
                  <Route path={"/solutions"} element={<Solutions/>}/>
                  <Route path={"/about"} element={<About/>}/>
                  <Route path={"/services"} element={<Services/>}/>
                  <Route path={"/technologies"} element={<Technologies/>}/>
                  <Route path={"/expertise"} element={<Expertise/>}/>
                  <Route path={"/reviews"} element={<Reviews/>}/>
                  <Route path={"/contacts"} element={<Contacts/>}/>
                </Routes>
              </Wrapper>
          }
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
