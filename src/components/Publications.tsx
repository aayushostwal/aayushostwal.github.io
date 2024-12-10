import { Anchor, Box, Image, Text, Title } from "@mantine/core";
import { MdArrowOutward } from "react-icons/md";
import constants from "../constants";
import { PublicationDetail } from "./types";
function Publication({
  publicationDetail,
  hoveringPublication,
  setHoveringPublication,
}: {
  publicationDetail: PublicationDetail;
  hoveringPublication: string;
  setHoveringPublication: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <Anchor href={publicationDetail.link} target="_blank">
        <Box
          style={{
            transition: "background-color 0.3s ease", // Smooth transition
            backgroundColor:
              hoveringPublication === publicationDetail.heading
                ? constants.Colors.BOX_SHADOW + "40"
                : "transparent",
            display: "grid",
            borderRadius: "10px",
            gridTemplateColumns: "1fr 3fr",
            overflow: "hidden",
            paddingLeft: 10,
            paddingBottom: 5,
            marginTop: 10,
            minHeight: "110px",
            opacity:
              hoveringPublication === ""
                ? "100%"
                : hoveringPublication !== publicationDetail.heading
                ? "50%"
                : "100%",
          }}
          onMouseEnter={() => {
            setHoveringPublication(publicationDetail.heading);
            const button = document.getElementById(
              `publication-icon-${publicationDetail.heading}`
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
            setHoveringPublication("");
            const button = document.getElementById(
              `publication-icon-${publicationDetail.heading}`
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
                src={publicationDetail.thumbnail}
                alt="Random unsplash image"
              />
            </div>
          </Box>
          <Box>
            <Title
              order={3}
              style={{
                color:
                  hoveringPublication === publicationDetail.heading
                    ? "cyan"
                    : "white",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ display: "flex", alignItems: "center" }}>
                  {publicationDetail.heading}
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 3,
                  }}
                >
                  <MdArrowOutward
                    id={`publication-icon-${publicationDetail.heading}`}
                  />
                </span>
              </div>
            </Title>
            <Text
              style={{
                color: constants.Colors.TEXT,
              }}
            >
              {publicationDetail.summary}
            </Text>
          </Box>
        </Box>
      </Anchor>
    </>
  );
}

export default Publication;
