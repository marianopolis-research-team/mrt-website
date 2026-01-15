'use client';

import { useRef, useEffect, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function MetaballShader() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size, gl } = useThree();
  
  const mousePosition = useRef(new THREE.Vector2(0.5, 0.5));
  const targetMousePosition = useRef(new THREE.Vector2(0.5, 0.5));
  const cursorSphere3D = useRef(new THREE.Vector3(0, 0, 0));

  const shaderMaterial = useMemo(() => {
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(size.width, size.height) },
        uMousePosition: { value: new THREE.Vector2(0.5, 0.5) },
        uCursorSphere: { value: new THREE.Vector3(0, 0, 0) },
        uCursorRadius: { value: 0.08 },
        uSphereCount: { value: 3 },
        uFixedTopLeftRadius: { value: 0.32 },
        uFixedBottomRightRadius: { value: 0.4 },
        uSmallTopLeftRadius: { value: 0.14 },
        uSmallBottomRightRadius: { value: 0.16 },
        uSmoothness: { value: 0.55 },
        uAmbientIntensity: { value: 0.18 },
        uDiffuseIntensity: { value: 0.55 },
        uSpecularIntensity: { value: 0.8 },
        uSpecularPower: { value: 6.0 },
        uFresnelPower: { value: 1.2 },
        // Keep shader background slightly dark to avoid washing out with white page
        uBackgroundColor: { value: new THREE.Color(0x0a120a) },
        uSphereColor: { value: new THREE.Color(0x0c2a0c) },
        uLightColor: { value: new THREE.Color(0xa4d4a4) },
        uLightPosition: { value: new THREE.Vector3(0.9, 1.2, 0.7) },
        uContrast: { value: 1.1 },
        uFogDensity: { value: 0.015 },
        uAnimationSpeed: { value: 0.4 },
        uMovementScale: { value: 0.55 },
        uMergeDistance: { value: 1.5 },
        uCursorGlowIntensity: { value: 0.5 },
        uCursorGlowRadius: { value: 0.6 },
        uCursorGlowColor: { value: new THREE.Color(0x44ff59) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMousePosition;
        uniform vec3 uCursorSphere;
        uniform float uCursorRadius;
        uniform int uSphereCount;
        uniform float uFixedTopLeftRadius;
        uniform float uFixedBottomRightRadius;
        uniform float uSmallTopLeftRadius;
        uniform float uSmallBottomRightRadius;
        uniform float uSmoothness;
        uniform float uAmbientIntensity;
        uniform float uDiffuseIntensity;
        uniform float uSpecularIntensity;
        uniform float uSpecularPower;
        uniform float uFresnelPower;
        uniform vec3 uBackgroundColor;
        uniform vec3 uSphereColor;
        uniform vec3 uLightColor;
        uniform vec3 uLightPosition;
        uniform float uContrast;
        uniform float uFogDensity;
        uniform float uAnimationSpeed;
        uniform float uMovementScale;
        uniform float uMergeDistance;
        uniform float uCursorGlowIntensity;
        uniform float uCursorGlowRadius;
        uniform vec3 uCursorGlowColor;
        
        varying vec2 vUv;
        
        const float PI = 3.14159265359;
        const float EPSILON = 0.0035;
        const float MAX_DIST = 100.0;
        
        float smin(float a, float b, float k) {
          float h = max(k - abs(a - b), 0.0) / k;
          return min(a, b) - h * h * k * 0.25;
        }
        
        float sdSphere(vec3 p, float r) {
          return length(p) - r;
        }
        
        vec3 screenToWorld(vec2 normalizedPos) {
          vec2 uv = normalizedPos * 2.0 - 1.0;
          uv.x *= uResolution.x / uResolution.y;
          return vec3(uv, 0.0);
        }
        
        float sceneSDF(vec3 pos) {
          float result = MAX_DIST;
          
          vec3 topLeftPos = screenToWorld(vec2(0.08, 0.92));
          float topLeft = sdSphere(pos - topLeftPos, uFixedTopLeftRadius);
          
          vec3 smallTopLeftPos = screenToWorld(vec2(0.25, 0.72));
          float smallTopLeft = sdSphere(pos - smallTopLeftPos, uSmallTopLeftRadius);
          
          vec3 bottomRightPos = screenToWorld(vec2(0.92, 0.08));
          float bottomRight = sdSphere(pos - bottomRightPos, uFixedBottomRightRadius);
          
          vec3 smallBottomRightPos = screenToWorld(vec2(0.72, 0.25));
          float smallBottomRight = sdSphere(pos - smallBottomRightPos, uSmallBottomRightRadius);
          
          float t = uTime * uAnimationSpeed;
          
          for (int i = 0; i < 6; i++) {
            if (i >= uSphereCount) break;
            
            float fi = float(i);
            float speed = 0.32 + fi * 0.08;
            float radius = 0.05 + mod(fi, 3.0) * 0.03;
            float orbitRadius = (0.12 + mod(fi, 3.0) * 0.06) * uMovementScale;
            float phaseOffset = fi * PI * 0.35;
            
            vec3 offset;
            if (i == 0) {
              offset = vec3(
                sin(t * speed) * orbitRadius * 0.7,
                sin(t * 0.5) * orbitRadius,
                cos(t * speed * 0.7) * orbitRadius * 0.5
              );
            } else if (i == 1) {
              offset = vec3(
                sin(t * speed + PI) * orbitRadius * 0.5,
                -sin(t * 0.5) * orbitRadius,
                cos(t * speed * 0.7 + PI) * orbitRadius * 0.5
              );
            } else {
              offset = vec3(
                sin(t * speed + phaseOffset) * orbitRadius * 0.8,
                cos(t * speed * 0.85 + phaseOffset * 1.3) * orbitRadius * 0.6,
                sin(t * speed * 0.5 + phaseOffset) * 0.3
              );
            }
            
            vec3 toCursor = uCursorSphere - offset;
            float cursorDist = length(toCursor);
            if (cursorDist < uMergeDistance && cursorDist > 0.0) {
              float attraction = (1.0 - cursorDist / uMergeDistance) * 0.3;
              offset += normalize(toCursor) * attraction;
            }
            
            float movingSphere = sdSphere(pos - offset, radius);
            
            float blend = 0.05;
            if (cursorDist < uMergeDistance) {
              float influence = 1.0 - (cursorDist / uMergeDistance);
              blend = mix(0.05, uSmoothness, influence * influence * influence);
            }
            
            result = smin(result, movingSphere, blend);
          }
          
          float cursorBall = sdSphere(pos - uCursorSphere, uCursorRadius);
          
          float topLeftGroup = smin(topLeft, smallTopLeft, 0.4);
          float bottomRightGroup = smin(bottomRight, smallBottomRight, 0.4);
          
          result = smin(result, topLeftGroup, 0.3);
          result = smin(result, bottomRightGroup, 0.3);
          result = smin(result, cursorBall, uSmoothness);
          
          return result;
        }
        
        vec3 calcNormal(vec3 p) {
          float eps = 0.001;
          return normalize(vec3(
            sceneSDF(p + vec3(eps, 0, 0)) - sceneSDF(p - vec3(eps, 0, 0)),
            sceneSDF(p + vec3(0, eps, 0)) - sceneSDF(p - vec3(0, eps, 0)),
            sceneSDF(p + vec3(0, 0, eps)) - sceneSDF(p - vec3(0, 0, eps))
          ));
        }
        
        float ambientOcclusion(vec3 p, vec3 n) {
          return 1.0;
        }
        
        float softShadow(vec3 ro, vec3 rd, float mint, float maxt, float k) {
          return 1.0;
        }
        
        float rayMarch(vec3 ro, vec3 rd) {
          float t = 0.0;
          
          for (int i = 0; i < 14; i++) {
            vec3 p = ro + rd * t;
            float d = sceneSDF(p);
            
            if (d < EPSILON) {
              return t;
            }
            
            if (t > 5.0) {
              break;
            }
            
            t += d * 1.1;
          }
          
          return -1.0;
        }
        
        vec3 lighting(vec3 p, vec3 rd, float t) {
          if (t < 0.0) {
            return vec3(0.0);
          }
          
          vec3 normal = calcNormal(p);
          vec3 viewDir = -rd;
          
          vec3 baseColor = uSphereColor;
          
          float ao = ambientOcclusion(p, normal);
          
          vec3 ambient = uLightColor * uAmbientIntensity;
          
          vec3 lightDir = normalize(uLightPosition);
          float diff = max(dot(normal, lightDir), 0.0);
          
          vec3 diffuse = uLightColor * diff * uDiffuseIntensity;
          
          vec3 reflectDir = reflect(-lightDir, normal);
          float spec = pow(max(dot(viewDir, reflectDir), 0.0), uSpecularPower);
          float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), uFresnelPower);
          
          vec3 specular = uLightColor * spec * uSpecularIntensity * fresnel;
          
          vec3 fresnelRim = uLightColor * fresnel * 0.25;
          
          float distToCursor = length(p - uCursorSphere);
          if (distToCursor < uCursorRadius + 0.4) {
            float highlight = 1.0 - smoothstep(0.0, uCursorRadius + 0.4, distToCursor);
            specular += uLightColor * highlight * 0.2;
            
            float glow = exp(-distToCursor * 3.0) * 0.15;
            ambient += uLightColor * glow * 0.5;
          }
          
          vec3 color = (baseColor + ambient + diffuse + specular + fresnelRim) * ao;
          
          color = pow(color, vec3(uContrast * 0.9));
          color = color / (color + vec3(0.8));
          
          return color;
        }
        
        float calculateCursorGlow(vec3 worldPos) {
          float dist = length(worldPos.xy - uCursorSphere.xy);
          float glow = 1.0 - smoothstep(0.0, uCursorGlowRadius, dist);
          glow = pow(glow, 2.0);
          return glow * uCursorGlowIntensity;
        }
        
        void main() {
          vec2 uv = (gl_FragCoord.xy / uResolution.xy) * 2.0 - 1.0;
          uv.x *= uResolution.x / uResolution.y;
          
          vec3 ro = vec3(uv, -1.5);
          vec3 rd = vec3(0.0, 0.0, 1.0);
          
          float t = rayMarch(ro, rd);
          
          vec3 p = ro + rd * t;
          
          vec3 color = lighting(p, rd, t);
          
          float cursorGlow = calculateCursorGlow(ro);
          vec3 glowContribution = uCursorGlowColor * cursorGlow;
          
          if (t > 0.0) {
            float fogAmount = 1.0 - exp(-t * uFogDensity);
            color = mix(color, uBackgroundColor.rgb, fogAmount * 0.12);
            
            color += glowContribution * 0.35;
            
            gl_FragColor = vec4(color, 1.0);
          } else {
            if (cursorGlow > 0.01) {
              gl_FragColor = vec4(glowContribution, cursorGlow * 0.8);
            } else {
              gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
            }
          }
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });
    
    return material;
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      targetMousePosition.current.x = event.clientX / size.width;
      targetMousePosition.current.y = 1.0 - event.clientY / size.height;
      
      const aspect = size.width / size.height;
      const uv_x = targetMousePosition.current.x * 2.0 - 1.0;
      const uv_y = targetMousePosition.current.y * 2.0 - 1.0;
      cursorSphere3D.current.set(uv_x * aspect, uv_y, 0.0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const material = meshRef.current.material as THREE.ShaderMaterial;
    
    // Smooth mouse movement
    mousePosition.current.x += (targetMousePosition.current.x - mousePosition.current.x) * 0.08;
    mousePosition.current.y += (targetMousePosition.current.y - mousePosition.current.y) * 0.08;
    
    material.uniforms.uTime.value = state.clock.getElapsedTime();
    material.uniforms.uMousePosition.value = mousePosition.current;
    material.uniforms.uCursorSphere.value = cursorSphere3D.current;
    const dpr = gl.getPixelRatio();
    material.uniforms.uResolution.value.set(size.width * dpr, size.height * dpr);

    // Request a render in demand mode
    state.invalidate();
  });

  return (
    <mesh ref={meshRef} material={shaderMaterial}>
      <planeGeometry args={[2, 2]} />
    </mesh>
  );
}

export default function MetaballsHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-white">
      {mounted && (
        <Canvas
          camera={{ 
            position: [0, 0, 1],
            left: -1,
            right: 1,
            top: 1,
            bottom: -1,
            near: 0.1,
            far: 10
          }}
          gl={{ 
            alpha: true, 
            antialias: true,
            preserveDrawingBuffer: false,
            powerPreference: 'high-performance',
          }}
          orthographic
          frameloop="demand"
          style={{ width: '100%', height: '100%', display: 'block' }}
          dpr={[1, 1.5]}
        >
          <MetaballShader />
        </Canvas>
      )}
    </div>
  );
}
