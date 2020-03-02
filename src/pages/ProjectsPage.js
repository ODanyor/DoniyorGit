import React from "react";
import Project from "../compositions/Project";
import Illustration from "../components/Project/Illustration";
import Description from "../components/Project/Description";
import { Page } from "../static/StyledComponents";
import { storage } from "../storage";

const Projects = ({ storage }) =>
  storage.map((project, index) => (
    <Project
      key={index}
      illustration={<Illustration img={project.img} link={project.liveLink} />}
      description={<Description description={project.description} />}
    />
  ));

const ProjectsPage = () => {
  return (
    <Page>
      <Projects storage={storage} />
    </Page>
  );
};

export default ProjectsPage;
