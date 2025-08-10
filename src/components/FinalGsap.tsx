import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { InstancedMesh, Object3D, Vector3 } from "three";
import * as THREE from "three";
import { useTheme } from "../contexts/ThemeContext"; 
import { gsap } from "gsap";

const FinalGsap: React.FC = () => {
  const { isDark } = useTheme();
  const tetrahedronRef = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);

  const [tetrahedronBaseSize, setTetrahedronBaseSize] = useState(1.2);

  const MOBILE_BREAKPOINT = 768; 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setTetrahedronBaseSize(0.8); 
      }
      else {
        setTetrahedronBaseSize(1.2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  const tetrahedronGeometry = useMemo(
    () => new THREE.TetrahedronGeometry(tetrahedronBaseSize, 0),
    [tetrahedronBaseSize]
  );


  const { positions1, count1 } = useMemo(() => {
    const pos = [];
    const clusters = 12; 

    for (let i = 0; i < clusters; i++) {
      const clusterAngle = (i / clusters) * Math.PI * 2;
      const clusterRadius = 6;
      const clusterX = Math.cos(clusterAngle) * clusterRadius;
      const clusterZ = Math.sin(clusterAngle) * clusterRadius;

      for (let j = 0; j < 5; j++) {
        const angle = (j / 5) * Math.PI * 2;
        const radius = Math.random() * 2;
        pos.push(
          new Vector3(
            clusterX + Math.cos(angle) * radius,
            (Math.random() - 0.5) * 8, // Random Y position
            clusterZ + Math.sin(angle) * radius
          )
        );
      }
    }
    return { positions1: pos, count1: pos.length };
  }, []); 


  useEffect(() => {
   
    if (tetrahedronRef.current) {
      gsap.to(tetrahedronRef.current.scale, {
        x: 2.8,
        y: 2.8,
        z: 2.8, 
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power4.inOut",
      });

      gsap.to(tetrahedronRef.current.rotation, {
        x: Math.PI * 2,
        y: Math.PI * 4,
        duration: 13,
        repeat: -1,
        ease: "none",
      });

      gsap.to(tetrahedronRef.current.position, {
        y: 4, 
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "back.inOut",
      });
    }
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime(); 

 if (tetrahedronRef.current) {
      positions1.forEach((position, i) => {
        dummy.position.copy(position);
        dummy.position.y += Math.sin(time * 3 + i * 0.5) * 2;
        dummy.position.x += Math.sin(time * 2 + i * 0.3) * 0.8;
        dummy.position.z += Math.cos(time * 2.5 + i * 0.4) * 0.8;

        dummy.rotation.x = time * 2.5 + i * 0.4;
        dummy.rotation.y = time * 2 + i * 0.35;
        dummy.rotation.z = time * 1.5 + i * 0.45;

        const scale = 0.8 + Math.sin(time * 5 + i * 0.4) * 0.5;
        dummy.scale.setScalar(scale);

        dummy.updateMatrix(); 
        tetrahedronRef.current!.setMatrixAt(i, dummy.matrix); 
      });
      tetrahedronRef.current.instanceMatrix.needsUpdate = true; 
    }
  });


  const gradientTexture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const texture = loader.load("/Gradient.png");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }, []);

  return (
    <group>
      {isDark ? (
        <instancedMesh
          key={`tetrahedron-${isDark}-${tetrahedronBaseSize}`}
          ref={tetrahedronRef}
          args={[tetrahedronGeometry, undefined, count1]}
        >
          <meshStandardMaterial
            color="#E43636" 
            emissive="#5a0000" 
            emissiveIntensity={0.25} 
            metalness={0.6}
            roughness={0.2}
            transparent={true} 
            opacity={0.85} 
          />
        </instancedMesh>
      ) : (
         <instancedMesh
          key={`tetrahedron-${isDark}-${tetrahedronBaseSize}`}
          ref={tetrahedronRef}
          args={[tetrahedronGeometry, undefined, count1]}
        >
          <meshStandardMaterial
            color="#ffffff" 
            emissive={new THREE.Color(0xffffff)} 
            emissiveMap={gradientTexture} 
            emissiveIntensity={1} 
            metalness={0.9}
            roughness={0.1}
            transparent={true} 
            opacity={0.8} 
          />
        </instancedMesh>
      )}
    </group>
  );
};

export default FinalGsap;
