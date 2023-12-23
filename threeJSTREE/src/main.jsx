import * as THREE from 'three'; //Importing three library into project file

// SCENE

const scene = new THREE.Scene(); //Creating Scene

//SPHERE CREATION

const geometry = new THREE.SphereGeometry(3, 64, 64); //Creating sphere with parameters that define it's size and curves
const material = new THREE.MeshStandardMaterial({ // Defining the mesh material settings
  color: "#ff0000",
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh) //adding mesh to scene

// CAMERA - What we see on the screen

const camera = new THREE.PerspectiveCamera(45, 800, 600)
camera.position.z = 20
scene.add(camera);


// RENDERING 

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 600);
renderer.render(scene, camera);
