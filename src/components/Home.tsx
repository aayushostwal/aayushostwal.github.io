import { Box, Text } from "@mantine/core";
import BioSection from "./BioSection";

import { useMediaQuery } from "@mantine/hooks";
import { useRef, useState } from "react";
import article from "../data/article";
import projects from "../data/projects";
import About from "./About";
import Experience from "./Experience";
import Heading from "./Heading";
import BaseLayout from "./Layout";
import Projects from "./Projects";
import Publication from "./Publications";
import CustomAnchor from "./Resume";
import { ArticleDetails, ExperienceDetails, ProjectDetails } from "./types";

export default function AppLayout() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [hoveringExpName, setHoveringExpName] = useState("");
  const ExpDetails: ExperienceDetails[] = [
    projects.qureSrProject,
    projects.hilabsProject,
    projects.materateProject,
  ];

  const [hoveringPublication, setHoveringPublication] = useState("");
  const publications: ArticleDetails[] = [
    article.ArticleList[0],
    article.ArticleList[1],
    article.ArticleList[2],
  ];

  const [hoveringProjectName, setHoveringProjectName] = useState("");
  const projectDetails: ProjectDetails[] = [projects.website];

  const rightBlockRef = useRef<HTMLDivElement>(null);

  const handleLeftBlockScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    const rightBlock = rightBlockRef.current;
    if (rightBlock) {
      rightBlock.scrollTop += e.deltaY;
    }
  };

  return (
    <>
      <BaseLayout
        id={"home"}
        leftComponent={
          <>
            {isMobile ? (
              <></>
            ) : (
              <Box onWheel={handleLeftBlockScroll}>
                <BioSection />
              </Box>
            )}
          </>
        }
        rightComponent={
          <>
            <Box
              ref={rightBlockRef}
              style={{
                paddingTop: 15,
                scrollbarWidth: "none",
                ...(isMobile
                  ? { height: "90vh", overflow: "auto" }
                  : { overflow: "auto", paddingLeft: 20 }),
                "&:hover": {
                  backgroundColor: "lightgray",
                  border: "2px solid blue",
                },
              }}
            >
              {isMobile ? (
                <Box
                  style={{
                    overflow: "auto",
                    height: "auto",
                    paddingBottom: 60,
                  }}
                >
                  <BioSection />
                </Box>
              ) : (
                <></>
              )}
              {/* About Section */}
              <Heading serialNumber="01." heading="about" />
              <About />

              {/* Experience Section */}
              <Heading serialNumber="02." heading="experiences" />
              {ExpDetails.map((projectDetail) => {
                return (
                  <Experience
                    key={projectDetail.link}
                    projectDetail={projectDetail}
                    hoveringProjectName={hoveringExpName}
                    setHoveringProjectName={setHoveringExpName}
                  />
                );
              })}

              {/* Resume Section */}
              <Heading serialNumber="03." heading="resume" />
              <CustomAnchor id="resume" text="View Resume" href="/resume.pdf" />

              {/* Featured Publications */}
              <Heading serialNumber="04." heading="Writings" />
              <Box style={{ display: "inline-flex" }}>
                View all my articles now in a collated way
                <Box
                  style={{
                    marginTop: 7,
                    marginLeft: -35,
                  }}
                >
                  <CustomAnchor id="articles" text="here" href="/articles" />
                </Box>
              </Box>
              <Text style={{ color: "white" }}>Featured Articles:</Text>
              {publications.map((publication) => {
                return (
                  <Publication
                    publicationDetail={publication}
                    hoveringPublication={hoveringPublication}
                    setHoveringPublication={setHoveringPublication}
                  />
                );
              })}

              {/* Projects */}
              <Heading serialNumber="06." heading="Projects" />
              {projectDetails.map((project) => {
                return (
                  <Projects
                    projectDetail={project}
                    hoveringProject={hoveringProjectName}
                    setHoveringProject={setHoveringProjectName}
                  />
                );
              })}
              <Box
                style={{
                  paddingTop: 60,
                  fontSize: 10,
                  color: "gray",
                }}
              >
                <Text size="xs">
                  Built with Vite.js and Typescript, deployed with Vercel.
                  Designs are inspired by{" "}
                  <a href="https://brittanychiang.com/">Brittany Chiang</a>.
                </Text>
              </Box>
            </Box>
          </>
        }
      />
    </>
  );
}
