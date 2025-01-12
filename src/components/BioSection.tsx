import { Anchor, Box, Image, Text, Title } from "@mantine/core";
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
          paddingTop: 30,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "80%",
          minHeight: "200px",
        }}
      >
        <Box>
          <Image
            src={"profile.png"}
            style={{
              height: "50%",
              width: "43%",
              borderRadius: 1000,
            }}
          />
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
              fontSize: 21,
              color: "#E2E8F0",
            }}
          >
            Sr. Backend Engineer
          </Text>

          <Text>
            I develop end-to-end, scalable, data-driven, intuitive and
            interactive solutions.
          </Text>
        </Box>
        <Box style={{ display: "flex", gap: "20px" }}>
          <IconLink Icon={FaGithub} link="https://github.com/aayushostwal" />
          <IconLink
            Icon={FaLinkedinIn}
            link="https://www.linkedin.com/in/aayush-ostwal/"
          />
          <IconLink Icon={FaMediumM} link="https://medium.com/@aayushostwal" />
          <IconLink
            Icon={IoMdMailUnread}
            link="mailto:aayushostwal99@gamil.com"
          />
        </Box>
      </Box>
    </>
  );
}

export default BioSection;
