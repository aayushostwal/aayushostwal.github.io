import { Anchor, Box, Image, Text, Title } from "@mantine/core";
import { MdArrowOutward } from "react-icons/md";
import constants from "../constants";
import { ProjectDetails } from "./types";
function Projects({
  projectDetail,
  hoveringProject,
  setHoveringProject,
}: {
  projectDetail: ProjectDetails;
  hoveringProject: string;
  setHoveringProject: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <Anchor href={projectDetail.link} target="_blank">
        <Box
          style={{
            transition: "background-color 0.3s ease", // Smooth transition
            backgroundColor:
              hoveringProject === projectDetail.heading
                ? constants.Colors.BOX_SHADOW + "40"
                : "transparent",
            display: "grid",
            borderRadius: "10px",
            gridTemplateColumns: "1fr 4fr",
            overflow: "hidden",
            paddingLeft: 10,
            paddingBottom: 5,
            marginTop: 10,
            minHeight: "110px",
            opacity:
              hoveringProject === ""
                ? "100%"
                : hoveringProject !== projectDetail.heading
                ? "50%"
                : "100%",
          }}
          onMouseEnter={() => {
            setHoveringProject(projectDetail.heading);
            const button = document.getElementById(
              `publication-icon-${projectDetail.heading}`
            );
            if (button) {
              button.style.color = "cyan";
              button.style.fontWeight = "500";
              button.style.textShadow = "10px";
              button.style.paddingLeft = "2px";
              button.style.paddingBottom = "2px";
            }
          }}
          onMouseLeave={() => {
            setHoveringProject("");
            const button = document.getElementById(
              `publication-icon-${projectDetail.heading}`
            );
            if (button) {
              button.style.color = constants.Colors.TEXT;
              button.style.fontWeight = "100";
              button.style.textShadow = "10px";
              button.style.paddingLeft = "0px";
              button.style.paddingBottom = "0px";
            }
          }}
        >
          <Box>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Image
                radius="md"
                width={120}
                height={80}
                src={projectDetail.thumbnail}
                alt="Random unsplash image"
                style={{
                  borderRadius: 12,
                }}
              />
            </div>
          </Box>
          <Box
            style={{
              marginLeft: 10,
            }}
          >
            <Title
              order={3}
              style={{
                color:
                  hoveringProject === projectDetail.heading ? "cyan" : "white",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ display: "flex", alignItems: "center" }}>
                  {projectDetail.heading}
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 3,
                  }}
                >
                  <MdArrowOutward
                    id={`publication-icon-${projectDetail.heading}`}
                  />
                </span>
              </div>
            </Title>
            <Text
              style={{
                color: constants.Colors.TEXT,
              }}
            >
              {projectDetail.desc}
            </Text>
          </Box>
        </Box>
      </Anchor>
    </>
  );
}

export default Projects;
