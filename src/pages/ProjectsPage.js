import React from "react";
import Project from "../compositions/Project";
import Illustration from "../components/Project/Illustration";
import Description from "../components/Project/Description";
import { Page } from "../static/StyledComponents";
import { storage } from "../storage";

const Projects = ({ storage, mode }) =>
  storage.map((project, index) => (
    <Project
      mode={mode}
      key={index}
      illustration={<Illustration img={project.img} link={project.liveLink} />}
      description={<Description description={project.description} />}
    />
  ));

const ProjectsPage = ({ mode }) => {
  return (
    <Page>
      <Projects mode={mode} storage={storage} />
    </Page>
  );
};

export default ProjectsPage;
