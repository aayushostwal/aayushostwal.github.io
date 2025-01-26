import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ReactNode } from "react";

interface BaseLayoutProps {
  id: string;
  leftComponent: ReactNode;
  rightComponent: ReactNode;
}

export default function BaseLayout({ id, leftComponent, rightComponent }: BaseLayoutProps) {
  const isMobile = useMediaQuery("(max-width: 821px)");
  return (
    <>
      <Box
        id={id}
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
          gridTemplateRows: isMobile ? "auto auto" : "auto",
          width: "auto",
          // width: "98vw",
          height: isMobile ? "auto" : "90vh", // Adjust height for mobile
          margin: 0,
          paddingTop: isMobile ? 10 : 50,
          paddingLeft: isMobile ? 20 : 60,
          paddingRight: isMobile ? 20 : 50,
          // overflow: "hidden",
          overflowY: isMobile ? "auto" : "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {leftComponent}
        {rightComponent}
      </Box>
    </>
  );
}
