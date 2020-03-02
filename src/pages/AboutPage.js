import React from "react";
import About from "../compositions/About";
import Details from "../components/About/Details";
import PhotoContainer from "../components/About/PhotoContainer";
import { Page } from "../static/StyledComponents";

const AboutPage = () => {
  return (
    <Page>
      <About left={<Details />} right={<PhotoContainer />} />
    </Page>
  );
};

export default AboutPage;
