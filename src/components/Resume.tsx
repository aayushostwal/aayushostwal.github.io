import { Button } from "@mantine/core";
import constants from "../constants";

function ViewResume() {
  return (
    <>
      <Button
        variant="light"
        radius="xl"
        id="resume-button"
        style={{
          backgroundColor: constants.Colors.BOX_SHADOW,
          border: "2px solid transparent",
          transition: "border-color 0.3s",
        }}
        onMouseEnter={() => {
          const resumeButton = document.getElementById("resume-button");
          if (resumeButton) {
            resumeButton.style.borderColor = "cyan";
          }
        }}
        onMouseLeave={() => {
          const resumeButton = document.getElementById("resume-button");
          if (resumeButton) {
            resumeButton.style.borderColor = "transparent";
          }
        }}
        onClick={() => {
          window.location.pathname = "/resume.pdf";
        }}
      >
        See full Resume
      </Button>
    </>
  );
}
export default ViewResume;
