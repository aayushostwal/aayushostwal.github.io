import { Box, MantineProvider } from "@mantine/core";
import CursorShadowProvider from "./components/CursorShadow";
import AppLayout from "./components/Home";

export default function App() {
  return (
    <MantineProvider>
      <CursorShadowProvider>
        <Box
          style={{
            width: "100vw",
            height: "100vh",
            fontSize: 16,
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
