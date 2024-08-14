import { Tooltip, Zoom } from "@mui/material";
import React from "react";
import { Container, ImageContainer } from "./styles";
import { Language } from "@mui/icons-material";
import { motion } from "framer-motion";

const AnimatedTooltipImage: React.FC<{
  src: string;
  title: string;
  top?: boolean;
}> = ({ src, title, top = false }) => {
  return (
    <motion.div
      initial={{ scale: 1, boxShadow: "none" }} // Initial state when not hovered
      whileHover={{
        scale: 1.3,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)", // Shadow effect on hover
      }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }} // Transition settings
      style={{ display: "inline-block" }} // Ensure div only takes up as much space as needed
    >
      <Tooltip
        title={title}
        disableInteractive
        TransitionComponent={Zoom}
        placement={top ? "top" : "bottom"}
      >
        <img src={src} alt={title} style={{ width: "100%", height: "auto" }} />
      </Tooltip>
    </motion.div>
  );
};

const LanguageComponent: React.FC = () => {
  return (
    <>
      <div className="text-left text-3xl pb-2">
        Languages <Language />
      </div>
      <ImageContainer className="grid grid-cols-4 gap-4">
        <AnimatedTooltipImage src="images/html.png" title="HTML" top />
        <AnimatedTooltipImage src="images/css.png" title="CSS" top />
        <AnimatedTooltipImage src="images/C++.png" title="C & C++" top />
        <AnimatedTooltipImage src="images/java.png" title="Java" top />
        <AnimatedTooltipImage
          src="images/javascript.png"
          title="JavaScript (Obviously)"
        />
        <AnimatedTooltipImage src="images/python.png" title="Python" />
        <AnimatedTooltipImage src="images/react.png" title="React" />
        <AnimatedTooltipImage src="images/typescript.png" title="TypeScript" />
      </ImageContainer>
      <div className="text-left text-sm pt-4">And, as a human I can speak</div>
      <Container className="text-left text-sm">
        English, Hindi, Telugu and Kannada
      </Container>
    </>
  );
};

export default LanguageComponent;
