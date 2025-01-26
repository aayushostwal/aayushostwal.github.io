import { Box, Text } from "@mantine/core";
import { BiRightArrow } from "react-icons/bi";
import { CiTrophy } from "react-icons/ci";
import constants from "../../constants";
import StyledChip from "../StyledChip";
import { ExperienceDetails } from "../types";


export default function Experience({
  key,
  projectDetail,
  hoveringProjectName,
  setHoveringProjectName,
}: {
  key: string;
  projectDetail: ExperienceDetails;
  hoveringProjectName: string;
  setHoveringProjectName: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <Box
          key={key}
        style={{
          transition: "background-color 0.3s ease", // Smooth transition
          backgroundColor:
            hoveringProjectName === projectDetail.company
              ? constants.Colors.BOX_SHADOW + "40"
              : "transparent",
          display: "grid",
          borderRadius: "10px",
          gridTemplateColumns: "1fr 4fr",
          overflow: "hidden",
          paddingLeft: 10,
          paddingBottom: 5,
          marginTop: 10,
          opacity:
            hoveringProjectName === ""
              ? "100%"
              : hoveringProjectName !== projectDetail.company
              ? "50%"
              : "100%",
        }}
        onMouseEnter={() => setHoveringProjectName(projectDetail.company)}
        onMouseLeave={() => setHoveringProjectName("")}
      >
        <Box
          style={{
            overflow: "auto",
            paddingRight: 2,
          }}
        >
          <Text
            fw={500}
            style={{
              color: constants.Colors.TEXT,
              fontSize: 12,
              display: "inline-flex",
              paddingTop: 7,
            }}
          >
            {projectDetail.year}
          </Text>
        </Box>
        <Box
          style={{
            overflow: "auto",
          }}
        >
          <Text
            fw={700}
            style={{
              textAlign: "left",
              width: "100%",
              color:
                hoveringProjectName === projectDetail.company
                  ? "cyan"
                  : "white",
              fontSize: 16,
            }}
          >
            <Box>
              {projectDetail.company}

              {projectDetail.is_internship ? (
                <StyledChip text="Internship" sx={{ marginLeft: 10 }} />
              ) : (
                <></>
              )}
            </Box>
          </Text>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              overflow: "visible",
              marginTop: -10,
            }}
          >
            {projectDetail.experience.map((item) => {
              return (
                <div style={{ marginBottom: "2px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "4px",
                    }}
                  >
                    <BiRightArrow
                      size={7}
                      color="cyan"
                      style={{
                        paddingTop: 5.5,
                        flexShrink: 0,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        margin: 0, // Remove extra margin
                      }}
                    >
                      {item}
                    </Text>
                  </div>
                </div>
              );
            })}
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              overflow: "visible",
            }}
          >
            {projectDetail.achievements?.map((item) => {
              return (
                <div style={{ marginBottom: "2px", paddingTop: "15px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "4px",
                    }}
                  >
                    <CiTrophy
                      size={15}
                      color="cyan"
                      style={{
                        paddingTop: 2,
                        flexShrink: 0,
                      }}
                    />
                    <Text
                      style={{
                        color: "cyan",
                        fontSize: 12,
                        margin: 0, // Remove extra margin
                      }}
                    >
                      {item}
                    </Text>
                  </div>
                </div>
              );
            })}
          </Box>

          <Box
            style={{
              marginTop: 20,
              overflow: "visible",
            }}
          >
            {projectDetail.skills.map((skill) => {
              return <StyledChip text={skill} />;
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
