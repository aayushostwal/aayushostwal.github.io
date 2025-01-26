import { Anchor, Text } from "@mantine/core";
import { MdArrowOutward } from "react-icons/md";
import constants from "../constants";

function CustomAnchor({
  id,
  text,
  href,
}: {
  id: string;
  text: string;
  href: string;
}) {
  return (
    <>
      <Anchor key={id} href={href} target="_blank">
        <Text
          variant="light"
          size="xs"
          id={id}
          style={{
            marginLeft: 37,
            marginTop: -5,
            color: constants.Colors.TEXT,
          }}
          onMouseEnter={() => {
            const resumeButton = document.getElementById(id);
            if (resumeButton) {
              resumeButton.style.color = "cyan";
              resumeButton.style.fontWeight = "500";
              resumeButton.style.textShadow = "10px";
            }
            const icon = document.getElementById(id + "-icon");
            if (icon) {
              // icon.style.fontSize = "20";
              icon.style.paddingLeft = "4px";
              icon.style.paddingBottom = "4px";
            }
          }}
          onMouseLeave={() => {
            const resumeButton = document.getElementById(id);
            if (resumeButton) {
              resumeButton.style.color = constants.Colors.TEXT;
              resumeButton.style.fontWeight = "100";
              resumeButton.style.textShadow = "10px";
            }
            const icon = document.getElementById(id + "-icon");
            if (icon) {
              // icon.style.fontSize = "15";
              icon.style.paddingLeft = "0px";
              icon.style.paddingBottom = "0px";
            }
          }}
        >
          <div style={{ display: "flex", alignItems: "center", fontSize: 14 }}>
            <span
              style={{ display: "flex", alignItems: "center", paddingLeft: 6 }}
            >
              {text}
            </span>
            <span
              style={{ display: "flex", alignItems: "center", paddingLeft: 3 }}
            >
              <MdArrowOutward id={id + "-icon"} />
            </span>
          </div>
        </Text>
      </Anchor>
    </>
  );
}
export default CustomAnchor;
