// My3DModelClass.js
import React, { Component } from 'react';
import { Canvas } from 'react-three-fiber';
import { MeshStandardMaterial } from 'three';

class My3DModelClass extends Component {
  constructor(props) {
    super(props);
    this.meshRef = React.createRef();
  }

  animate = () => {
    if (this.meshRef.current) {
      this.meshRef.current.rotation.x += 0.01;
      this.meshRef.current.rotation.y += 0.01;
    }

    this.frameId = requestAnimationFrame(this.animate);
  };

  componentDidMount() {
    this.animate();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameId);
  }

  render() {
    return (
      <mesh ref={this.meshRef}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="orange" />
      </mesh>
    );
  }
}

export default My3DModelClass;
