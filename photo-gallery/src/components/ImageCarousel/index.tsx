import React, { useState } from "react";
import ImageContainerComponent, {
  ImageContainerProps,
} from "./ImageContainerComponent";
import {
  CarouselControlContainer,
  ImageCardContainer,
  ImageCarouselHolder,
  ImageNavigatorContainer,
} from "./styles";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "@mui/material";
import { theme } from "../../themes/constats";
import { motion } from "framer-motion";

export type ImageItemType = {
  src: string;
  location: string;
  unsplashUrl: string;
};

const imagesMap = [
  {
    src: "https://images.unsplash.com/photo-1680644740335-5c345443c6bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Munnar",
    unsplashUrl:
      "https://unsplash.com/photos/a-small-bird-perched-on-the-side-of-a-tree-3NfsVNF1PnY",
  },
  {
    src: "https://images.unsplash.com/photo-1680710702951-4173cb3b0933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Munnar",
    unsplashUrl:
      "https://unsplash.com/photos/a-bee-is-sitting-on-a-yellow-flower-ozrRyed96ZY",
  },
  {
    src: "https://images.unsplash.com/photo-1723576436707-75c1224a38bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Mahabaleswar",
    unsplashUrl: "https://unsplash.com/photos/ZZqZM2rwGLc",
  },
  {
    src: "https://images.unsplash.com/photo-1723028161341-9a4564452219?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Kodaikanal",
    unsplashUrl:
      "https://unsplash.com/photos/a-small-bird-perched-on-a-tree-branch-e02UlohZ1fk",
  },
  {
    src: "https://images.unsplash.com/photo-1723028161206-7d9ade866d57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Dandeli",
    unsplashUrl:
      "https://unsplash.com/photos/a-small-bird-sitting-on-top-of-a-tree-branch-niY6WbmuvcE",
  },
];

const ImageCarousel = () => {
  const [imageIndex, setImageIndex] = useState(4);
  const prevImage = () => {
    console.log(((((imageIndex - 1) % 5) + 5) % 5) + "!!!!!!!!!!!!!!!");
    setImageIndex((((imageIndex - 1) % 5) + 5) % 5);
  };
  const nextImage = () => {
    setImageIndex((imageIndex + 1) % 5);
  };
  return (
    <ImageCarouselHolder className="mt-2 mb-6">
      <ImageContainerComponent
        index={imageIndex}
        image={imagesMap[imageIndex]}
      />
      <CarouselControlContainer className="grid grid-cols-12 items-center">
        <motion.div
          className="col-span-2"
          key={imageIndex - 1}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ImageCardContainer
            className="m-6"
            style={{
              backgroundImage: `url(${
                imagesMap[(((imageIndex - 1) % 5) + 5) % 5]?.src
              })`,
            }}
            onClick={prevImage}
          />
        </motion.div>

        <ImageNavigatorContainer>
          <IconButton
            aria-label="previous image"
            className="col-span-2 flex justify-center"
            onClick={prevImage}
          >
            <ChevronLeft size={24} color={theme.colors.cream} />
          </IconButton>
        </ImageNavigatorContainer>

        <ImageNavigatorContainer>
          <IconButton
            aria-label="next image"
            className="col-span-2 flex justify-center"
            onClick={nextImage}
          >
            <ChevronRight size={24} color={theme.colors.cream} />
          </IconButton>
        </ImageNavigatorContainer>

        <motion.div
          className="col-span-2"
          key={imageIndex + 1}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ImageCardContainer
            className="m-6"
            style={{
              backgroundImage: `url(${imagesMap[(imageIndex + 1) % 5]?.src})`,
            }}
            onClick={nextImage}
          />
        </motion.div>
      </CarouselControlContainer>
    </ImageCarouselHolder>
  );
};

export default ImageCarousel;
