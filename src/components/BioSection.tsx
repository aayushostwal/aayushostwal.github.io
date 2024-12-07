import { Anchor, Box, Text, Title } from "@mantine/core";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import constants from "../constants";
interface IconLinkProps {
  Icon: IconType; // Icon component from react-icons
  link: string; // URL for the anchor link
}

const IconLink: React.FC<IconLinkProps> = ({ Icon, link }) => {
  return (
    <Anchor
      href={link}
      target="_blank"
      style={{
        color: constants.Colors.TEXT, // Replace with your constant color or style
      }}
    >
      <Box style={{ overflow: "auto" }}>
        <Icon size={25} />
      </Box>
    </Anchor>
  );
};
function BioSection() {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "90%",
        }}
      >
        <Title
          order={1}
          size="h1"
          style={{
            fontWeight: 900,
            color: "#E2E8F0",
          }}
        >
          Aayush Ostwal
        </Title>

        <Text
          style={{
            marginTop: -15,
            fontWeight: 500,
            fontSize: 15,
            color: "#E2E8F0",
          }}
        >
          Senior Backend Engineer
        </Text>

        <Text>
          I develop end-to-end, scalable, data-driven, intuitive and interactive
          solutions.
        </Text>

        <div style={{ marginTop: "auto" }}>
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
              width: "60%",
              overflow: "hidden",
            }}
          >
            <Box style={{ overflow: "auto" }}>
              <IconLink
                Icon={FaGithub}
                link="https://github.com/aayushostwal"
              />
            </Box>
            <Box style={{ overflow: "auto" }}>
              <IconLink
                Icon={FaLinkedinIn}
                link="https://www.linkedin.com/in/aayush-ostwal/"
              />
            </Box>
            <Box style={{ overflow: "auto" }}>
              <IconLink
                Icon={FaMediumM}
                link="https://medium.com/@aayushostwal"
              />
            </Box>
            <Box style={{ overflow: "auto" }}>
              <IconLink
                Icon={IoMdMailUnread}
                link="mailto:aayushostwal99@gamil.com"
              />
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
}

export default BioSection;