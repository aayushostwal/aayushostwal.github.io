import { Box, Button, Group, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import BaseLayout from "../Layout";
import WebDevelopment from "./WebDevelopment";

export default function Writings() {
  const topicList = ["Web Development", "Databases", "Machine Leaning"];
  const [selectedTopic, setSelectedTopic] = useState("");
  useEffect(() => {
    setSelectedTopic(topicList[0]);
  });
  const isMobile = useMediaQuery("(max-width: 768px)");
  const rightBlockRef = useRef<HTMLDivElement>(null);
  const handleLeftBlockScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    const rightBlock = rightBlockRef.current;
    if (rightBlock) {
      rightBlock.scrollTop += e.deltaY;
    }
  };
  return (
    <>
      <BaseLayout
        id={"articles"}
        leftComponent={
          <>
            <Box onWheel={handleLeftBlockScroll}>
              <Box>
                <span>
                  <IoArrowBack id="arrow_back" size={25} />
                </span>
              </Box>
              <Box>
                <Text
                  style={{
                    marginTop: 50,
                    marginBottom: 50,
                    fontWeight: 500,
                    fontSize: 21,
                    color: "#E2E8F0",
                  }}
                >
                  Topics I write About:
                </Text>
              </Box>
              {topicList.map((topic, index) => {
                return (
                  <Box key={index}>
                    <Button
                      style={{
                        border: "transparent",
                        background: "transparent",
                        opacity: topic === selectedTopic ? "100%" : "40%",
                        //   "&:hover": {

                        //   },
                      }}
                    >
                      <Group style={{ display: "flex", alignItems: "center" }}>
                        {topic === selectedTopic ? <FaHandPointRight /> : <></>}
                        <Text
                          style={{
                            marginLeft: 10,
                            fontWeight: 500,
                            fontSize: 14,
                            color: "#E2E8F0",
                          }}
                        >
                          {topic}
                        </Text>
                      </Group>
                    </Button>
                  </Box>
                );
              })}
            </Box>
          </>
        }
        rightComponent={
          <>
            <Box
              ref={rightBlockRef}
              style={{
                scrollbarWidth: "none",
                ...(isMobile
                  ? { height: "90vh", overflow: "auto" }
                  : { overflow: "auto", paddingLeft: 20 }),
              }}
            >
              {selectedTopic === "Web Development" ? <WebDevelopment /> : <></>}
            </Box>
          </>
        }
      />
    </>
  );
}
