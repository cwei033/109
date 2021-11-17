// Art 109 Three.js Demo Site
// client6.js
// A three.js scene which loads a static and animated model.

// The pink model is static (contains no animation data in the file)
// It is animated manually in Three.js

// The green model is preanimated (contains animation data created in blender)
// 3D model is from Blender default

// Implements Orbit controls and font loader

// Import required source code
// Import three.js core
import * as THREE from "./build/three.module.js";

// Import add-ons for glTF models, orbit controls, and font loader
import {
  OrbitControls
} from "./src/OrbitControls.js";
import {
  GLTFLoader
} from "./src/GLTFLoader.js";
import {
  FontLoader
} from "./src/FontLoader.js"

let container, scene, camera, renderer, mesh, mesh2, mesh3, mesh4, mixer, controls, clock;

let ticker = 0;

// Call init and animate functions (defined below)
init();
animate();

function init() {

  //Identify div in HTML to place scene
  container = document.getElementById("space");

  //Crate clock for animation
  clock = new THREE.Clock();

  //Create scene
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer({
    alpha: true,
  });
  //renderer.setClearColor("rgb(130, 114, 51)");
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  // Add scene to gltf.html
  container.appendChild(renderer.domElement);

  // Load preanimated model, add material, and add it to the scene
  const loader = new GLTFLoader().load(
    "./assets/project3final.glb",
    function(gltf) {
      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          //child.material = newMaterial;
        }
      });
      // set position and scale
      mesh = gltf.scene;
      mesh.position.set(-0.15, 1.9, 2.5);
      mesh.rotation.set(6.7, 9.5, 0);
      mesh.scale.set(2.5, 2.5, 2.5);
      // Add model to scene
      scene.add(mesh);
      //Check for and play animation frames
      mixer = new THREE.AnimationMixer(mesh);
      gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
      });

    },
    undefined,
    function(error) {
      console.error(error);
    }
  );

  // Load static model, add material, and add it to the scene
  const loader2 = new GLTFLoader().load(
    "./assets/tree.glb",
    function(gltf) {
      // set position and scale
      mesh2 = gltf.scene;
      mesh2.position.set(-0.2, 0, 0);
      mesh2.rotation.set(0.7, 12, 0);
      mesh2.scale.set(0.5, 0.5, 0.5);
      // Add model to scene
      scene.add(mesh2);

    },
    undefined,
    function(error) {
      console.error(error);
    }
  );

  // Load preanimated model, add material, and add it to the scene
  const loader3 = new GLTFLoader().load(
    "./assets/applebird.glb",
    function(gltf) {
      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          //child.material = newMaterial;
        }
      });
      // set position and scale
      mesh3 = gltf.scene;
      mesh3.position.set(0.5, 0.8, 3);
      mesh3.rotation.set(7.5, 6.6, -0.1);
      mesh3.scale.set(1.5, 1.5, 1.5);
      // Add model to scene
      scene.add(mesh3);
    },
    undefined,
    function(error) {
      console.error(error);
    }
  );

  // Load preanimated model, add material, and add it to the scene
  const loader4 = new GLTFLoader().load(
    "./assets/applebird.glb",
    function(gltf) {
      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          //child.material = newMaterial;
        }
      });
      // set position and scale
      mesh4 = gltf.scene;
      mesh4.position.set(-0.65, 0.8, 3.5);
      mesh4.rotation.set(8.9, 6, 0.5);
      mesh4.scale.set(1.5, 1.5, 1.5);
      // Add model to scene
      scene.add(mesh4);
    },
    undefined,
    function(error) {
      console.error(error);
    }
  );

  // Add Orbit Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 3;
  controls.maxDistance = 8;
  controls.target.set(0, 3, 0);

  // Position our camera so we can see the shape
  camera.position.z = 5.8;

  // Add a directional light to the scene
  const directionalLight = new THREE.DirectionalLight("rgb(247, 204, 30)", 1.5);
  scene.add(directionalLight);

  // Add an ambient light to the scene
  const ambientLight = new THREE.AmbientLight("rgb(219, 144, 0)", 0.85);
  scene.add(ambientLight);

  // Add Text under models
  const loader5 = new FontLoader();
  loader5.load('./assets/Playfair Display SC_Bold Italic.json', function(font) {
    // Define font color
    const color = 'rgb(153, 34, 14)';
    // Define font material
    const matDark = new THREE.LineBasicMaterial({
      color: color,
      side: THREE.DoubleSide
    });
    // Generate and place front text
    const message = "The Birple";
    const shapes = font.generateShapes(message, .1);
    const geometry = new THREE.ShapeGeometry(shapes);
    geometry.computeBoundingBox();
    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);
    const text = new THREE.Mesh(geometry, matDark);
    text.position.set(1, 0.15, 4);
    text.rotation.set(0.5, 0, 0);
    scene.add(text);

    const color1 = 'rgb(214, 188, 60)';
    // Define font material
    const matDark1 = new THREE.LineBasicMaterial({
      color: color1,
      side: THREE.DoubleSide
    });
    // Generate and place behind text
    const message1 = "The Birple";
    const shapes1 = font.generateShapes(message1, .1);
    const geometry1 = new THREE.ShapeGeometry(shapes1);
    geometry1.computeBoundingBox();
    geometry1.translate(xMid, 0, 0);
    const text1 = new THREE.Mesh(geometry1, matDark1);
    text1.position.set(0.996, 0.154, 3.99);
    text1.rotation.set(0.5, 0, 0);
    scene.add(text1);
  });

}

// Define animate loop
function animate() {
  controls.update();
  requestAnimationFrame(animate);
  var delta = clock.getDelta();
  if (mixer) mixer.update(delta);
  render();
}

// Define the render loop
function render() {
  renderer.render(scene, camera);
}

// Respond to Window Resizing
window.addEventListener("resize", onWindowResize);

// Window resizing function
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  render();
}
