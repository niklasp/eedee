/// <reference types="@react-three/fiber" />
/// <reference types="three" />

declare module "@react-three/fiber";
declare module "@react-three/drei";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      sphereGeometry: any;
      planeGeometry: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
      meshPhysicalMaterial: any;
      hemisphereLight: any;
      directionalLight: any;
      ambientLight: any;
      rectAreaLight: any;
      spotLight: any;
    }
  }
}
