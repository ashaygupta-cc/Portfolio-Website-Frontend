import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import FinalGsap from './FinalGsap';

const Scene3D: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
     <Canvas className="w-full h-screen">
          <PerspectiveCamera makeDefault position={[0, 0, 25]} fov={60} />
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={15}
            maxDistance={50}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
          
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          <FinalGsap />
        </Canvas>
    </div>
  );
};

export default Scene3D;
