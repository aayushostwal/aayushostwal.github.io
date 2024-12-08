import { Box } from "@mantine/core";
import BioSection from "./BioSection";

import { useMediaQuery } from "@mantine/hooks";
import { useRef, useState } from "react";
import qure from "../data/projects/qure";
import About from "./About";
import Experience from "./Experience";
import Heading from "./Heading";
import ViewResume from "./Resume";
import { ProjectDetails } from "./types";

export default function AppLayout() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [hoveringProjectName, setHoveringProjectName] = useState("");
  const projectDetails: ProjectDetails[] = [
    qure.qureSrProject,
    qure.qureProject,
    { ...qure.qureProject, company: "123" },
  ];

  const rightBlockRef = useRef<HTMLDivElement>(null);

  const handleLeftBlockScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    const rightBlock = rightBlockRef.current;
    if (rightBlock) {
      rightBlock.scrollTop += e.deltaY;
    }
  };

  return (
    <>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
          gridTemplateRows: isMobile ? "auto auto" : "auto",
          width: "auto",
          // width: "98vw",
          height: isMobile ? "auto" : "98vh", // Adjust height for mobile
          margin: 0,
          paddingTop: isMobile ? 10 : 50,
          paddingLeft: isMobile ? 20 : 60,
          paddingRight: isMobile ? 20 : 50,
          // overflow: "hidden",
          overflowY: isMobile ? "auto" : "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {isMobile ? (
          <></>
        ) : (
          <Box onWheel={handleLeftBlockScroll}>
            <BioSection />
          </Box>
        )}

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
          {projectDetails.map((projectDetail) => {
            return (
              <Experience
                projectDetail={projectDetail}
                hoveringProjectName={hoveringProjectName}
                setHoveringProjectName={setHoveringProjectName}
              />
            );
          })}

          {/* Achievements Sections */}
          <Heading serialNumber="03." heading="resume" />
          <ViewResume />

          {/* Achievements Sections */}
          <Heading serialNumber="04." heading="achievements" />

          {/* Featured Publications */}
          <Heading serialNumber="05." heading="featured publication" />

          {/* Projects */}
          <Heading serialNumber="06." heading="Projects" />
        </Box>
      </Box>
    </>
  );
}
