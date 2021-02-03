import React, { useEffect } from "react";
import * as THREE from "three";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ThreePlanet = () => {
    useEffect(() => {
        let scene, camera, renderer;
        let planet;
        let rings = [];
        let ADD = 0.01;

        // let randomInRange = function (from, to) {
        //     let x = Math.random() * (to - from);
        //     return x + from;
        // };

        window.addEventListener('resize', () => {
            let width = window.innerWidth
            let height = window.innerHeight
            renderer.setSize(width, height)
            camera.aspect = width / height
            camera.updateProjectionMatrix()
        })

        let createSaturn = function () {
            let geometry = new THREE.SphereGeometry(4, 30, 30);
            let material = new THREE.MeshBasicMaterial(
                { color: 0x8d5524, wireframe: true });

            planet = new THREE.Mesh(geometry, material);
            scene.add(planet);

            geometry = new THREE.TorusGeometry(5.1, 0.7, 2, 50)
            material = new THREE.MeshBasicMaterial({ color: 0xffe39f })
            let ring = new THREE.Mesh(geometry, material)
            rings.push(ring)
            scene.add(ring)

            geometry = new THREE.TorusGeometry(6.9, 0.7, 2, 50)
            material = new THREE.MeshBasicMaterial({ color: 0xffad60 })
            let ring2 = new THREE.Mesh(geometry, material)
            rings.push(ring2)
            scene.add(ring2)

            geometry = new THREE.TorusGeometry(8.5, 0.7, 2, 50)
            material = new THREE.MeshBasicMaterial({ color: 0xeac086 })
            let ring3 = new THREE.Mesh(geometry, material)
            rings.push(ring3)
            scene.add(ring3)

            rings.forEach(r => {
                r.rotation.x = 1.7
                r.rotation.y = 0.2
                scene.add(r)
            })
        };



        // set up the environment - 
        // initiallize scene, camera, objects and renderer
        let init = function () {
            // create the scene
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x000000);

            // create an locate the camera
            camera = new THREE.PerspectiveCamera(75,
                window.innerWidth / window.innerHeight,
                0.1, 1000);
            camera.position.z = 20

            createSaturn()

            // let axes = new THREE.AxesHelper(10)
            // scene.add(axes)

            // create the renderer   
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);

            document.body.appendChild(renderer.domElement);

        };


        // main animation loop - calls 50-60 times per second.
        let animate = function () {
            // requestAnimationFrame(animate)
            // cube.rotation.x += 0.01;
            // e.rotation.y += 0.01;
            camera.position.y += ADD
            // camera.position.x += ADD
            if(camera.position.y >= 5 || camera.position.y <= -5) {
                ADD *= -1
            }
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        

        init();
        animate()
    }, [])

    return (
        <>

        </>
    )
}

export default ThreePlanet
