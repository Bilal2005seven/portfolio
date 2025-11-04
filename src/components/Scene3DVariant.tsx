import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Torus ref={meshRef} args={[1, 0.4, 16, 100]} position={position} scale={1.5}>
      <MeshDistortMaterial
        color="#0080FF"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.3}
        metalness={0.7}
      />
    </Torus>
  );
};

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesCount = 500;
  const positions = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 15;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#6366F1"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
};

const Scene3DVariant = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#0080FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#6366F1" />
        <AnimatedTorus position={[3, 2, 0]} />
        <AnimatedTorus position={[-3, -2, -2]} />
        <FloatingParticles />
      </Canvas>
    </div>
  );
};

export default Scene3DVariant;
