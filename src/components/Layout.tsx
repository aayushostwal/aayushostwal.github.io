import { Box } from "@mantine/core";
import BioSection from "./BioSection";

import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import qure from "../data/projects/qure";
import Experience from "./Experience";
import { ProjectDetails } from "./types";

export default function AppLayout() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [hoveringProjectName, setHoveringProjectName] = useState("");
  console.log("hoveringProjectName", hoveringProjectName);
  console.log("isMobile", isMobile);
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
        gridTemplateRows: isMobile ? "auto auto" : "auto",
        width: "98vw",
        height: isMobile ? "auto" : "98vh", // Adjust height for mobile
        margin: 0,
        padding: 0,
        // overflow: "hidden",
        overflowY: isMobile ? "auto" : "hidden",
      }}
    >
      <Box
        style={{
          paddingLeft: 60,
          paddingTop: 70,
          overflow: "visible",
          // height: "auto",
        }}
      >
        <BioSection />
      </Box>
      <Box
        style={{
          paddingLeft: 60,
          paddingTop: 70,
          ...(isMobile
            ? { height: "100vh", overflow: "visible" }
            : { overflow: "auto" }),
          "&:hover": {
            backgroundColor: "lightgray",
            border: "2px solid blue",
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
