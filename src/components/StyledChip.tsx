import { Box } from "@mantine/core";

export default function StyledChip({
  text,
  sx = {},
}: {
  text: string;
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
        color: "cyan",
        fontSize: "11px",
        whiteSpace: "nowrap",
        width: "fit-content",
        marginRight: 3,
        marginBottom: 3,
        ...sx,
      }}
    >
      {text}
    </Box>
  );
}
