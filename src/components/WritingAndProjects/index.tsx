import { Box, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import article from "../../data/article";
import BaseLayout from "../Layout";
import Publication from "../Publications";
import { ArticleDetails } from "../types";

function StyledChip({
  text,
  selected,
  onClickFunction,
  sx = {},
}: {
  text: string;
  selected: boolean;
  onClickFunction: (e: React.MouseEvent<HTMLDivElement>) => void;
  sx?: Record<string, any>;
}) {
  return (
    <Box
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 12px",
        borderRadius: "9999px",
        backgroundColor: "#2DD4bf1a",
        opacity: selected ? "100%" : "50%",
        color: "cyan",
        fontSize: "13px",
        whiteSpace: "nowrap",
        width: "fit-content",
        marginRight: 3,
        marginBottom: 3,
        marginTop: 6,
        cursor: "pointer",
        ...sx,
      }}
      onClick={(e) => {
        onClickFunction(e);
      }}
    >
      {selected ? (
        <>
          <FaCheck style={{ marginRight: 5 }} />
        </>
      ) : (
        <></>
      )}
      {text}
    </Box>
  );
}

function BackButton() {
  return (
    <>
      <Box
        style={{
          display: "inline-flex",
        }}
      >
        <IoMdArrowBack />
        <Text
          style={{
            marginTop: -4,
            marginLeft: 6,
            cursor: "pointer",
          }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Go Back
        </Text>
      </Box>
    </>
  );
}

export default function Writings() {
  const topicList = [
    "Web Development",
    "Database",
    "Django",
    "React",
    "Artificial Intelligence",
    "Data Science",
    "DevOps",
  ];

  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    "Web Development",
  ]);

  const [hoveringPublication, setHoveringPublication] = useState("");
  const updateSelectedTopic = (e: React.MouseEvent<HTMLDivElement>) => {
    const topicVal = e.currentTarget.textContent || "";
    if (selectedTopics.includes(topicVal)) {
      setSelectedTopics(selectedTopics.filter((topic) => topic !== topicVal));
    } else {
      setSelectedTopics([...selectedTopics, topicVal]);
    }
  };

  const [selectedArticles, setSelectedArticles] = useState<ArticleDetails[]>(
    []
  );
  useEffect(() => {
    const filteredArticles = article.ArticleList.filter((article) =>
      selectedTopics.some((topic) => article.tags.includes(topic))
    );
    setSelectedArticles(filteredArticles);
  }, [selectedTopics]);

  return (
    <>
      <BaseLayout
        id={"writings"}
        leftComponent={
          <Box>
            <BackButton />
            <Box id={"articles_tags"}>
              <Text
                fw={500}
                style={{
                  color: "white",
                  fontSize: 15,
                  display: "inline-flex",
                  paddingTop: 7,
                }}
              >
                <Box>
                  I write on lot of topics, Please select Tags to filter the
                  article.
                </Box>
              </Text>
              <Box>
                {topicList.map((topic) => (
                  <StyledChip
                    key={topic}
                    text={topic}
                    selected={selectedTopics.includes(topic)}
                    onClickFunction={updateSelectedTopic}
                    sx={{ marginLeft: 10, fontSize: "14px" }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        }
        rightComponent={
          <Box>
            {selectedArticles.map((publication: ArticleDetails) => {
              return (
                <Publication
                  publicationDetail={publication}
                  hoveringPublication={hoveringPublication}
                  setHoveringPublication={setHoveringPublication}
                />
              );
            })}
          </Box>
        }
      />
    </>
  );
}
