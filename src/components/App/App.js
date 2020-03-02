import React, { Suspense, lazy, useContext } from "react";
import { Context } from "../../context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Loading } from "../../static/StyledComponents";
// Components
import BurgerMenu from "../Menu/BurgerMenu";
import LinksMenu from "../Menu/LinksMenu";
import Background from "../Background/Background";
import { ThemeModeBackground } from "../../static/StyledComponents";
// Compositions
import Menu from "../../compositions/Menu";
// Pages
const AboutPage = lazy(() => import("../../pages/AboutPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));
const ProjectsPage = lazy(() => import("../../pages/ProjectsPage"));

function App() {
  const [data] = useContext(Context);
  const { darkMode } = data;
  return (
    <div className="App">
      <ThemeModeBackground color={darkMode ? "rgb(15, 40, 65)" : "#ffffff"} />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Welcome to my Dany Portfolio" />
        <title>Portfolio by Dany</title>
      </Helmet>
      <Router>
        <Menu
          menu={<BurgerMenu />}
          links={<LinksMenu />}
          background={<Background />}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Suspense fallback={<Loading>Welcome ...</Loading>}>
                <AboutPage />
              </Suspense>
            )}
          />
          <Route
            exact
            path="/contacts"
            render={() => (
              <Suspense fallback={<Loading>Contacts ...</Loading>}>
                <ContactsPage />
              </Suspense>
            )}
          />
          <Route
            exact
            path="/projects"
            render={() => (
              <Suspense fallback={<Loading>Projects ...</Loading>}>
                <ProjectsPage />
              </Suspense>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
