import React from "react";
import About from "../compositions/About";
import Details from "../components/About/Details";
import PhotoContainer from "../components/About/PhotoContainer";
import { Page } from "../static/StyledComponents";

const AboutPage = ({ context }) => {
  return (
    <Page>
      <About
        left={<Details context={context} />}
        right={<PhotoContainer context={context} />}
      />
    </Page>
  );
};

export default AboutPage;
