import { Box } from "@mantine/core";
import BioSection from "./BioSection";

import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import qure from "../data/projects/qure";
import Experience from "./Experience";
import { ProjectDetails } from "./types";

export default function AppLayout() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [hoveringProjectName, setHoveringProjectName] = useState("null");
  console.log("hoveringProjectName", hoveringProjectName);
  const projectDetails: ProjectDetails[] = [
    qure.qureSrProject,
    qure.qureProject,
    qure.qureProject,
    qure.qureProject,
    qure.qureProject,
    qure.qureProject,
    qure.qureProject,
    qure.qureProject,
    qure.qureProject,
  ];

  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
        width: "98vw",
        height: "98vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          paddingLeft: 60,
          paddingTop: 70,
          overflow: "auto",
        }}
      >
        <BioSection />
      </Box>
      <Box
        style={{
          paddingLeft: 60,
          paddingTop: 70,
          overflow: "auto",
          "&:hover": {
            backgroundColor: "lightgray", // Change to your desired hover color
            border: "2px solid blue", // Change to your desired border style
          },
        }}
      >
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
  );
}
