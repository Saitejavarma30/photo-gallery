import React, { useState, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Avatar } from "../Avatar";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import * as THREE from "three";

const CameraController = ({ targetRef }) => {
  const { camera } = useThree();

  useEffect(() => {
    const timeout = setTimeout(() => {
      gsap.to(camera.position, {
        duration: 5, // Duration of the animation in seconds
        x: 1,
        y: 1,
        z: 4,
        ease: "power2.inOut", // Easing function for smooth transition
      });
      if (targetRef.current) {
        gsap.to(targetRef.current.position, {
          duration: 5, // Duration of the object movement
          x: 0, // New X position of the object
          y: -1, // New Y position of the object
          z: 1, // New Z position of the object
          ease: "power2.inOut",
        });
      }
    }, 1700);

    return () => clearTimeout(timeout); // Clean up the timeout on unmount
  }, [targetRef]);

  return null; // This component does not render anything
};

const ImageContainer = () => {
  const objectRef = useRef(null);
  const [cameraPosition, setCameraPosition] = useState([-2, 0, 5]);

  useEffect(() => {
    setCameraPosition([-2, 0, 4]); // Change camera position after 3.7 seconds
  }, []);

  return (
    <Canvas shadows camera={{ position: cameraPosition, fov: 30 }}>
      <OrbitControls />
      <CameraController targetRef={objectRef} />
      <group position={[0, -1, 0]} ref={objectRef}>
        <Avatar />
      </group>
      <ambientLight intensity={2} />
    </Canvas>
  );
};

export default ImageContainer;
