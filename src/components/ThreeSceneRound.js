import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ThreeScene2 = () => {
    useEffect(() => {
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
        // var geometry = new THREE.SphereGeometry(1, 50, 10)
        // var material = new THREE.MeshStandardMaterial({ color: 0xff0051, flatShading: true, metalness: 0, roughness: 1 })

        // wireframe cube
        var geometry = new THREE.SphereGeometry(2, 20, 20, 0, Math.PI)
        var material = new THREE.MeshBasicMaterial({
            color: "orange", wireframe: true, transparent: false
        })
        var cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
        scene.background = new THREE.Color(0x123456)
        // var wireframeCube = new THREE.Mesh(geometry, material)
        // scene.add(wireframeCube)

        // ambient light
        var ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
        scene.add(ambientLight)

        // point light
        var pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(25, 50, 25);
        scene.add(pointLight);


        function animate() {
            requestAnimationFrame(animate)
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            // wireframeCube.rotation.x -= 0.01;
            // wireframeCube.rotation.y -= 0.01;
            renderer.render(scene, camera)
        }
        animate()
    }, [])

    return (
        <>
        </>
    );
}
export default ThreeScene2;
