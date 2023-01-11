
window.onscroll = function () { show_containers() };

function show_containers() {
    if (document.documentElement.scrollTop >= 250){
        document.getElementById('containers').style.opacity = "1";
    }
}
 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('planet3D'),
    alpha: true
});

renderer.setSize( document.getElementById('planet3D').clientWidth, document.getElementById('planet3D').clientHeight );

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const textures = [ "Gassy/jupiter_gassy.jpg", "Gassy/MiniNeptune_gassy.jpg", "Gassy/neptune_gassy.jpg", "Gassy/saturn_gassy.jpg", "Rocky/eris_rocky.jpg", "Rocky/haumea_rocky.jpg", "Rocky/mars_rocky.jpg", "Rocky/mercury_rocky.jpg", ];

const light = new THREE.AmbientLight(new THREE.Color((Math.random() * 0.3 + 0.7), (Math.random() * 0.3 + 0.7), (Math.random() * 0.3 + 0.7)).getHex(), 1.5);
scene.add(light)
const geometry = new THREE.SphereGeometry(1);
const material = new THREE.MeshPhysicalMaterial({ map: new THREE.TextureLoader().load(`../static/Images/Textures/${textures[ Math.floor(Math.random() * textures.length) ]}`) });
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 2;

controls.autoRotate = true;
controls.enableZoom = false;

function animate() {
    requestAnimationFrame( animate );

    controls.update();

    renderer.render( scene, camera );
};

animate();
