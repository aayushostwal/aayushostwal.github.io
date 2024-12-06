import React, { createContext, useContext, useState } from "react";
import constants from "../constants";

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
      <div
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Render the shadow */}
        <div
          style={{
            position: "absolute",
            top: cursorPosition.y - 200, // Offset for centering
            left: cursorPosition.x - 250,
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: constants.Colors.SHADOW,
            boxShadow: `0 0 120px 150px ${constants.Colors.SHADOW}`,
            pointerEvents: "none", // Prevent interaction
            zIndex: 0,
          }}
        />
        {/* Render child components */}
        <div
          style={{
            position: "relative",
            zIndex: 1, // Ensure children are above the shadow
          }}
        >
          {children}
        </div>
      </div>
    </CursorContext.Provider>
  );
};

export default CursorShadowProvider;
