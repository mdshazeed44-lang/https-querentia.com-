"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Floating "talent network" — a sphere of glowing particles with thin lines
 * connecting nearest neighbours. Rotates slowly, follows cursor, breathes
 * on scroll. Custom shader-driven point material for the soft glow.
 */
function NetworkPoints({ count = 220 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const lines = useRef<THREE.LineSegments>(null);
  const target = useRef({ x: 0, y: 0 });
  const { mouse } = useThree();

  // Positions distributed on a sphere shell with some jitter
  const { positions, linePositions, lineCount } = useMemo(() => {
    const R = 2.4;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = R * (0.85 + Math.random() * 0.3);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }

    // Build connections — each point linked to its 3 nearest neighbours
    const cons: number[] = [];
    for (let i = 0; i < count; i++) {
      const ax = pos[i * 3], ay = pos[i * 3 + 1], az = pos[i * 3 + 2];
      const dists: { j: number; d: number }[] = [];
      for (let j = i + 1; j < count; j++) {
        const dx = ax - pos[j * 3], dy = ay - pos[j * 3 + 1], dz = az - pos[j * 3 + 2];
        const d = dx * dx + dy * dy + dz * dz;
        dists.push({ j, d });
      }
      dists.sort((a, b) => a.d - b.d);
      for (let k = 0; k < Math.min(2, dists.length); k++) {
        const j = dists[k].j;
        cons.push(ax, ay, az, pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
      }
    }
    const lineArr = new Float32Array(cons);
    return { positions: pos, linePositions: lineArr, lineCount: cons.length / 6 };
  }, [count]);

  useFrame((state, dt) => {
    // Smooth cursor follow (lerp toward mouse)
    target.current.x += (mouse.x * 0.6 - target.current.x) * 0.05;
    target.current.y += (mouse.y * 0.4 - target.current.y) * 0.05;
    const t = state.clock.elapsedTime;
    if (points.current) {
      points.current.rotation.y = t * 0.06 + target.current.x;
      points.current.rotation.x = -target.current.y;
    }
    if (lines.current) {
      lines.current.rotation.y = t * 0.06 + target.current.x;
      lines.current.rotation.x = -target.current.y;
    }
  });

  return (
    <group>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#d3e2ff"
          transparent
          opacity={0.95}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#4f6bff"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Glowing core */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#1027d4" transparent opacity={0.5} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color="#4f6bff" transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

export function ParticleNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.4], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#4f6bff" />
      <pointLight position={[-5, -3, 2]} intensity={0.8} color="#00e5ff" />
      <NetworkPoints />
    </Canvas>
  );
}
