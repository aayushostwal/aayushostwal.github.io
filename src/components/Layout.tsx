import { Box } from "@mantine/core";
import BioSection from "./BioSection";

import { useMediaQuery } from "@mantine/hooks";

export default function AppLayout() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        width: "100vw",
        height: "100vh",
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
          width: "60%",
        }}
      >
        <BioSection />
      </Box>
      <Box
        style={{
          paddingLeft: 60,
          paddingTop: 70,
          overflow: "auto",
        }}
      >
        Right Section
      </Box>
    </Box>
  );
}
