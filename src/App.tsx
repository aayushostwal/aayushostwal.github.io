import { Box, MantineProvider } from "@mantine/core";
import CursorShadowProvider from "./components/CursorShadow";
import AppLayout from "./components/Layout";

export default function App() {
  return (
    <MantineProvider>
      <CursorShadowProvider>
        <Box
          style={{
            width: "100vw",
            height: "100vh",
            fontSize: 13,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <AppLayout />
        </Box>
      </CursorShadowProvider>
    </MantineProvider>
  );
}
