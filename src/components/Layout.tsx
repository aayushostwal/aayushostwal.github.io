import { Box } from "@mantine/core";
import BioSection from "./BioSection";

import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import qure from "../data/projects/qure";
import About from "./About";
import Experience from "./Experience";
import Heading from "./Heading";
import { ProjectDetails } from "./types";

export default function AppLayout() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [hoveringProjectName, setHoveringProjectName] = useState("");
  console.log("hoveringProjectName", hoveringProjectName);
  console.log("isMobile", isMobile);
  const projectDetails: ProjectDetails[] = [
    qure.qureSrProject,
    qure.qureProject,
    { ...qure.qureProject, company: "123" },
    { ...qure.qureProject, company: "1234" },
    { ...qure.qureProject, company: "234" },
    { ...qure.qureProject, company: "345" },
    { ...qure.qureProject, company: "456" },
    { ...qure.qureProject, company: "567" },
    { ...qure.qureProject, company: "678" },
  ];

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
          <Box>
            <BioSection />
          </Box>
        )}

        <Box
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
          <Heading serialNumber="01." heading="about" />
          <About />
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
        </Box>
      </Box>
    </>
  );
}
