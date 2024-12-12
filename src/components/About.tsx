import { Box, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import constants from "../constants";

function HoverComponent({ label }: { label: string }) {
  const { hovered, ref } = useHover<HTMLSpanElement>();
  return (
    <>
      <Box
        component="span"
        ref={ref}
        style={{
          color: hovered ? "cyan" : constants.Colors.TEXT,
          transition: "color 0.3s",
        }}
      >
        <b> {label}</b>
      </Box>
    </>
  );
}
function About() {
  return (
    <>
      <Text style={{ fontSize: 14 }}>
        I am a Senior Software Engineer with a strong academic background in
        Mechanical Engineering and Industrial Management from
        <HoverComponent label="IIT Kanpur" />, coupled with extensive experience
        in the complete software development lifecycle. My expertise encompasses
        <HoverComponent label="software development" />,{" "}
        <HoverComponent label="database management" />
        , <HoverComponent label="data engineering" />
        , and <HoverComponent label="cloud solutions" />.
      </Text>
      <Text style={{ fontSize: 14 }}>
        Currently, I am a Senior Software Engineer at{" "}
        <HoverComponent label="Qure.ai" />, where I specialize in database
        optimization, rapid feature development, and designing scalable cloud
        infrastructure. I play a key role in the development and maintenance of
        the Qure App, a critical healthcare platform that has positively
        impacted over <HoverComponent label="25 million" /> lives worldwide
      </Text>
      <Text style={{ fontSize: 14 }}>
        the past, I have had the opportunity to work extensively with big data
        frameworks such as Hadoop, PySpark, and Scala. I also have a strong
        interest in deep learning, which I have explored through various
        projects and shared insights on my{" "}
        <HoverComponent label="Medium publications" />.
      </Text>
      <Text style={{ fontSize: 14 }}>
        In my spare time, I love to watch movies, read books, go on some
        adventure trips. Since I have done stage and street plays, I can make
        things dramatic 🙂
      </Text>
    </>
  );
}

export default About;
