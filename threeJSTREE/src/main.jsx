import * as THREE from 'three'; //Importing three library into project file

// SCENE

const scene = new THREE.Scene(); //Creating Scene

//SPHERE CREATION

const geometry = new THREE.SphereGeometry(3, 64, 64); //Creating sphere with parameters that define it's size and curves
const material = new THREE.MeshStandardMaterial({ // Defining the mesh material settings
  color: "0x00ff00",
  roughness: 0.5,
  metalness: 0.5
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh) //adding mesh to scene

// CAMERA


