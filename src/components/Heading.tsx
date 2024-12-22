import { Box, Divider, Text } from "@mantine/core";
function Heading({
  serialNumber,
  heading,
}: {
  serialNumber: string;
  heading: string;
}) {
  return (
    <>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px", // Adjust spacing between elements
          color: "white", // Set the text color to match the image
        }}
      >
        {/* Section Number */}
        <Text
          style={{
            fontSize: 18, // Adjust size as needed
            fontWeight: "bold",
            color: "cyan", // Greenish color for "02."
            marginRight: "8px", // Space to the next text
          }}
        >
          {serialNumber}
        </Text>

        <Text
          style={{
            fontSize: 18, // Main title font size
            fontWeight: "600", // Semi-bold
          }}
        >
          {heading.toUpperCase()}
        </Text>

        {/* Divider */}
        <Divider
          style={{
            flex: 1, // Make the line take the remaining space
            height: "1px", // Line thickness
            backgroundColor: "rgba(255, 255, 255, 0.3)", // Subtle line color
          }}
        />
      </Box>
    </>
  );
}
export default Heading;
