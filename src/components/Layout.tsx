import { Box } from "@mantine/core";
import MyBio from "./Bio";

export default function AppLayout() {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          padding: "120px",
          overflow: "auto",
        }}
      >
        <MyBio />
      </Box>
      <Box
        style={{
          padding: "20px",
          overflow: "auto",
        }}
      >
        <div>Right Section </div>
      </Box>
    </Box>
  );
}
