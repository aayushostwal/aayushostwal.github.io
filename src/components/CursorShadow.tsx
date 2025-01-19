import { Box } from "@mantine/core";
import React, { createContext, useContext, useState } from "react";

// Optional: Create Context to share cursor data
const CursorContext = createContext({ x: 0, y: 0 });

export const useCursor = () => useContext(CursorContext);

const CursorShadowProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <CursorContext.Provider value={cursorPosition}>
      <Box
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Render the shadow */}
        <Box
          id="cursor_shadow"
          style={{
            position: "absolute",
            top: cursorPosition.y - 500, // Offset for centering
            left: cursorPosition.x - 500,
            width: "1000px",
            height: "1000px",
            borderRadius: "70%",
            // backgroundColor: "white",
            background: `radial-gradient(#94A3B8, rgb(16, 28, 61), rgb(16, 28, 61))`,
            pointerEvents: "none", // Prevent interaction
            opacity: "5%",
            zIndex: 0,
          }}
        />
        {/* Render child components */}
        <Box
          id="cursor_shadow_1"
          style={{
            position: "relative",
            opacity: "100%",
            zIndex: 1, // Ensure children are above the shadow
          }}
        >
          {children}
        </Box>
      </Box>
    </CursorContext.Provider>
  );
};

export default CursorShadowProvider;
