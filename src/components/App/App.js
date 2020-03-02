import React, { Suspense, lazy, useContext } from "react";
import { Context } from "../../context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Loading } from "../../static/StyledComponents";
import axios from "axios";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendContacts, messageToNull } from "../../store/actions/clientActions";
// Components
import BurgerMenu from "../Menu/BurgerMenu";
import LinksMenu from "../Menu/LinksMenu";
import Background from "../Background/Background";
import { ThemeModeBackground } from "../../static/StyledComponents";
import Notification from "../Notification/Notification";
// Compositions
import Menu from "../../compositions/Menu";
// Pages
const AboutPage = lazy(() => import("../../pages/AboutPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));
const ProjectsPage = lazy(() => import("../../pages/ProjectsPage"));

axios.defaults.baseURL =
  "https://europe-west2-doniyor-git.cloudfunctions.net/api/";

function App({ sendContacts, client, messageToNull }) {
  const [data, setData] = useContext(Context);
  const { darkMode } = data;
  return (
    <div className="App">
      <ThemeModeBackground color={darkMode ? "rgb(15, 40, 65)" : "#ffffff"} />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Dany's porfolio." />
        <title>Dany</title>
      </Helmet>
      <Router>
        <Menu
          menu={<BurgerMenu context={[data, setData]} />}
          links={<LinksMenu context={[data, setData]} />}
          background={<Background context={[data, setData]} />}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Suspense fallback={<Loading>Welcome ...</Loading>}>
                <AboutPage context={[data]} />
              </Suspense>
            )}
          />
          <Route
            exact
            path="/contacts"
            render={() => (
              <Suspense fallback={<Loading>Contacts ...</Loading>}>
                <ContactsPage
                  mode={darkMode}
                  sendContacts={sendContacts}
                  client={client}
                />
              </Suspense>
            )}
          />
          <Route
            exact
            path="/projects"
            render={() => (
              <Suspense fallback={<Loading>Projects ...</Loading>}>
                <ProjectsPage mode={darkMode} />
              </Suspense>
            )}
          />
        </Switch>
      </Router>
      <Notification
        mode={darkMode}
        client={client}
        messageToNull={messageToNull}
      />
    </div>
  );
}

App.propTypes = {
  client: PropTypes.object.isRequired,
  sendContacts: PropTypes.func.isRequired,
  messageToNull: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  sendContacts: data => dispatch(sendContacts(data)),
  messageToNull: () => dispatch(messageToNull())
});

const mapStateToProps = state => ({
  client: state.client
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
