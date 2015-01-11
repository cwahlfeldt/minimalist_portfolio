var size = 2;
var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 10000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(size, size, size);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);
var light = new THREE.AmbientLight(0x404040);
scene.add(light);
scene.add(cube);
camera.position.z = 6;

var render = function () {
	requestAnimationFrame(render);
	cube.rotation.x += 0.025;
	cube.rotation.y += 0.025;
	renderer.render(scene, camera);
};

render();