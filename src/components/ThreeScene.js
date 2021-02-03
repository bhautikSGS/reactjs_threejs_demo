import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ThreeScene = () => {
    useEffect(() => {
        // const scene = new THREE.Scene();
        // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // const renderer = new THREE.WebGLRenderer();
        // renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild(renderer.domElement);

        // const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        // const material = new THREE.MeshBasicMaterial({ color: "orange" });
        // const cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);

        // camera.position.z = 5;

        // const animate = function () {
        //     requestAnimationFrame(animate);

        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.01;

        //     renderer.render(scene, camera);
        // };

        // animate();

        //----------------------------------------------------------------------------//

        // const scene = new THREE.Scene();
        // const camera = new THREE.PerspectiveCamera(
        //     75,
        //     window.innerWidth / window.innerHeight,
        //     0.1,
        //     1000
        // );

        // const renderer = new THREE.WebGLRenderer();
        // renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild(renderer.domElement);

        // window.addEventListener("resize", function () {
        //     var width = window.innerWidth;
        //     var height = window.innerHeight;
        //     renderer.setSize(width, height);
        //     camera.aspect = width / height;
        //     camera.updateProjectionMatrix();
        // });

        // new OrbitControls(camera, renderer.domElement);

        // var geometry = new THREE.BoxGeometry(1, 1, 1);
        // var cubeMaterials = [
        //     new THREE.MeshBasicMaterial({
        //         map: new THREE.TextureLoader().load('assets/1.png'), side: THREE.DoubleSide
        //     }),
        //     new THREE.MeshBasicMaterial({
        //         map: new THREE.TextureLoader().load('assets/1.png'), side: THREE.DoubleSide
        //     }),
        //     new THREE.MeshBasicMaterial({
        //         map: new THREE.TextureLoader().load('assets/1.png'), side: THREE.DoubleSide
        //     }),
        //     new THREE.MeshBasicMaterial({
        //         map: new THREE.TextureLoader().load('assets/1.png'), side: THREE.DoubleSide
        //     }),
        //     new THREE.MeshBasicMaterial({
        //         map: new THREE.TextureLoader().load('assets/1.png'), side: THREE.DoubleSide
        //     }),
        //     new THREE.MeshBasicMaterial({
        //         map: new THREE.TextureLoader().load('assets/1.png'), side: THREE.DoubleSide
        //     }),
        // ];

        // // var material = new THREE.MeshBasicMaterial(cubeMaterials);
        // var material = new THREE.MeshBasicMaterial({
        //     map: new THREE.TextureLoader().load('assets/1.png'), side: THREE.FrontSide
        // });

        // var cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);

        // camera.position.z = 3;

        // var update = function () {
        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.005;
        // };

        // var render = function () {
        //     renderer.render(scene, camera);
        // };

        // var GameLoop = function () {
        //     requestAnimationFrame(GameLoop);

        //     update();
        //     render();
        // };

        // GameLoop();

        //-------------------------------------------------------------------------------//

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ antialias: true })

        renderer.setSize(window.innerWidth, window.innerHeight)
        // sets renderer background color
        renderer.setClearColor("#222222")
        document.body.appendChild(renderer.domElement)
        camera.position.z = 5

        // resize canvas on resize window
        window.addEventListener('resize', () => {
            let width = window.innerWidth
            let height = window.innerHeight
            renderer.setSize(width, height)
            camera.aspect = width / height
            camera.updateProjectionMatrix()
        })

        new OrbitControls(camera, renderer.domElement);

        // basic cube
        var geometry = new THREE.BoxGeometry(2, 2, 2)
        var material = new THREE.MeshStandardMaterial({ color: 0xff0051, flatShading: true, metalness: 0, roughness: 1 })
        var cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
        scene.background = new THREE.Color(0x123456)

        // wireframe cube
        // var geometry = new THREE.BoxGeometry(3, 3, 3)
        // var material = new THREE.MeshBasicMaterial({
        //     color: "#dadada", wireframe: true, transparent: true
        // })
        // var wireframeCube = new THREE.Mesh(geometry, material)
        // scene.add(wireframeCube)

        // ambient light
        var ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
        scene.add(ambientLight)

        // point light
        var pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(25, 50, 25);
        scene.add(pointLight);


        function animate() {
            requestAnimationFrame(animate)
            // cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;
            // wireframeCube.rotation.x -= 0.01;
            // wireframeCube.rotation.y -= 0.01;
            renderer.render(scene, camera)
        }
        animate()
    }, [])

    return (
        <>
            {/* <canvas></canvas> */}
        </>
    );
}
export default ThreeScene;
