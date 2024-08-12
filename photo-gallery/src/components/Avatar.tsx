import React, { useEffect, useRef, useMemo, useState } from "react";
import { Group, SkinnedMesh } from "three";
import { useFrame, useGraph, useThree } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

interface AvatarProps {
  [key: string]: any;
}

export function Avatar(props: AvatarProps): JSX.Element {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(
    "models/66b8ea1e7313deab568c1c0d.glb"
  ) as unknown as GLTF;

  const { animations: runningJumpAnimation } = useFBX(
    "animations/Standing.fbx"
  ) as { animations: THREE.AnimationClip[] };

  const { animations: poitingAnimation } = useFBX(
    "animations/pointing.fbx"
  ) as { animations: THREE.AnimationClip[] };

  if (poitingAnimation.length > 0) {
    poitingAnimation[0].name = "pointing";
  }

  if (runningJumpAnimation.length > 0) {
    runningJumpAnimation[0].name = "running";
  }

  // console.log(JSON.stringify(runningJumpAnimation));

  const { actions } = useAnimations(
    [runningJumpAnimation[0], poitingAnimation[0]],
    group
  );

  useEffect(() => {
    if (actions["pointing"]) {
      actions["pointing"].setLoop(THREE.LoopOnce, 1);
      actions["pointing"].clampWhenFinished = true;
      actions["pointing"].reset().fadeIn(1).play();
    }

    const timeout = setTimeout(() => {
      actions["pointing"]?.fadeOut(1);
      actions["running"]?.reset().fadeIn(1).play();
    }, 3700);

    return () => clearTimeout(timeout); // Clean up the timeout on unmount
  }, [actions]);

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as {
    nodes: { [key: string]: SkinnedMesh };
    materials: { [key: string]: THREE.Material };
  };

  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload("models/66b8ea1e7313deab568c1c0d.glb");
