import React from "react";
import { ImageContainer, ImageTextContent, ImageTextNumber } from "./styles";
import { ImageItemType } from ".";
import { Map } from "@mui/icons-material";

export type ImageContainerProps = {
  image: ImageItemType;
  index: number;
};

const ImageContainerComponent: React.FC<ImageContainerProps> = ({
  image,
  index,
}) => {
  return (
    <>
      <ImageContainer
        style={{
          backgroundImage: `url(${image.src})`,
        }}
        className="text-left"
      >
        <ImageTextNumber className="text-6xl p-3">{`0${
          index + 1
        }`}</ImageTextNumber>

        <ImageTextContent className="text-xl p-2">
          <Map />
          {image.location}
        </ImageTextContent>
      </ImageContainer>
    </>
  );
};

export default ImageContainerComponent;
