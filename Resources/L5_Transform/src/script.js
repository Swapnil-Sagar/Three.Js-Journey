import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */

const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xefefefef })
);
cube2.position.x = -2;
group.add(cube2);
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xf1ff1f })
);
cube3.position.x = 2;
group.add(cube3);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//const mesh = new THREE.Mesh(geometry, material);
//scene.add(mesh);
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
//OR
//mesh.position.set(0.7, -0.6, 1 )

//Scale
//mesh.scale.set(2, 0.5, 0.5);

//Rotation
// mesh.rotation.reorder("YXZ");
// mesh.rotation.y = 3.14159 * 0.25;
// mesh.rotation.x = Math.PI * 0.25;
//Half a rotation is Pi or Math.PI

//AxesHelper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

//Vector3 mothods
//console.log(mesh.position.length());

//Reset the object position
//mesh.position.normalize()

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//Always look at object
//camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
