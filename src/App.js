import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./Components/Box";
import Backdrop from "./Components/Backdrop";
import CameraRig from "./Components/CameraRig";
import Shirt from "./Components/Shirt";
import { Center } from "@react-three/drei";
import { OrbitControls, Preload, useGLTF, Stage } from "@react-three/drei";
import { ComputerModel } from "./Components/ComputerModel";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";
function App({ children }) {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh",alignItems:"center",justifyContent:"center",backgroundColor:"green",display:"flex" }}>
      <div
        style={{
          width: 300,
          height: 500,
          backgroundColor: "lightgray",
          boxShadow: "5px 5px 5px lightgray",
          borderRadius:24
        }}
      >
        <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 2]}
          camera={{ position: [0.2, 0.1, 0.3], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
        <Suspense fallback={CanvasLoader()}>
          <OrbitControls
            enableZoom={true}
            // maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 2}
            dampingFactor={0.3}
          />
          <Stage contactShadow={{ resolution: 1024, scale: 1000 }}>
            <ComputerModel />
          </Stage>
          <Preload all />
        </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};
export default App;
