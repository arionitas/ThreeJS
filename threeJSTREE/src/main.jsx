import * as THREE from 'three'; //Importing three library into project file

// SCENE

const scene = new THREE.Scene(); //Creating Scene

//SPHERE CREATION

const geometry = new THREE.SphereGeometry(3, 64, 64); //Creating sphere with parameters that define it's size and curves
const material = new THREE.MeshStandardMaterial({ // Defining the mesh material settings
  color: "#00ff83",
});


const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh) //adding mesh to scene

// LIGHTING - adding lights to the scene

const light = new THREE.PointLight(0xFFFFFF, 70, 100, 1.7);
light.position.set(0, 10, 10)
scene.add(light);


// CAMERA - What we see on the screen

const camera = new THREE.PerspectiveCamera(45, 800/600);
camera.position.z = 20 // Moving the camera in Z-space back by 20 meters
scene.add(camera);


// RENDERING 

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 600);
renderer.render(scene, camera);

console.log(renderer)


