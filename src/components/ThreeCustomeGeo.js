import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { OBJLoader } from 'three/examples/jsm/loaders/'

const ThreeCustomeGeo = () => {
    useEffect(() => {
        var scene = new THREE.Scene()
        var camera = new THREE.PerspectiveCamera((75, window.innerWidth / window.innerHeight, 0.1, 1000))

        var renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)

        window.addEventListener('resize', function() {
            var width = window.innerWidth
            var height = window.innerHeight
            renderer.setSize(width, height)
            camera.aspect = width / height
            camera.updateProjectionMatrix()
        })

        new OrbitControls(camera, renderer.domElement)

        // const loader = new GLTFLoader();
        new GLTFLoader().load( './assets/model/abc.gltf', function ( gltf ) {

            scene.add( gltf.scene );
        
        }, undefined, function ( error ) {
        
            console.error( error );
        
        } );

        camera.position.z = 3

        new THREE.AmbientLight(0xFFFFFF, 0.8)

        var update  = function() {

        }

        var render = function() {
            renderer.render(scene, camera)
        }

        var GameLoop = function() {
            requestAnimationFrame(GameLoop)
            update()
            render()
        }

        GameLoop()
    }, [])

    return (
        <>

        </>
    )
}

export default ThreeCustomeGeo
