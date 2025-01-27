import { Box, MantineProvider } from "@mantine/core";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CursorShadowProvider from "./components/CursorShadow";
import AppLayout from "./components/Home";
import Writings from "./components/WritingAndProjects";
import { SpeedInsights } from "@vercel/speed-insights/react"

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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout />} />
              <Route path="/articles" element={<Writings />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </CursorShadowProvider>
    </MantineProvider>
  );
}
