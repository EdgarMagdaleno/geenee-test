import React, { useRef } from 'react';
import * as THREE from 'three';
import Webcam from './Webcam';
import Cube from './Cube';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

/* 
 * When you click on the screen, a new random target position withing the camera is
 * generated. This new target position is updated in a redux store and when it changes,
 * the Cube component via mapDispatchToProps recognizes this change and
 * starts 'walking' (simple lerp) to it.
 */

/* Small store for saving the target position of the cube */
const initialPosition = [0, 0];
const cubeReducer = (state = initialPosition, action) => {
	switch(action.type) {
		case 'SET_TARGET_POSITION':
			return [...action.newTargetPosition];
			break;
		default:
			return state;
	}
}
const cubeStore = createStore(cubeReducer);

class MainScene extends React.Component {

	constructor(props) {
		super(props);

		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		this.camera.position.z = 5;

		this.renderer = new THREE.WebGLRenderer({ alpha: true });

		// Made it a little bit bigger than 30% of the screen
		this.renderer.setSize(window.innerWidth * 0.4, window.innerHeight * 0.4);

		this.controls = new OrbitControls(this.camera, this.renderer.domElement)

		this.animate = this.animate.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.cubeRef = React.createRef();


		this.animate();
	}

	componentDidMount() {
		this.mount.appendChild(this.renderer.domElement);
	}

	animate() {
		requestAnimationFrame(this.animate);
		this.renderer.render(this.scene, this.camera);
	}

	handleClick(e) {
		/* We generate a new target position, three.js coordinates are abstract,
		 * there should be a way to find a relation between them and client coordinates,
		 * for now -6, 6 and -3, 3 works */
		let randX = (Math.random() * 12) - 6;
		let randY = (Math.random() * 6) - 3;

		cubeStore.dispatch({
			type: 'SET_TARGET_POSITION',
			newTargetPosition: [randX, randY]
		})
	}

	render() {
		return (
			<div onClick={this.handleClick} ref={ref => (this.mount = ref)} >
				<Webcam scene={this.scene} />
				<Provider store={cubeStore} scene={this.scene} >
					<Cube scene={this.scene} />
				</Provider>
			</div>
		);
	}
}

export default MainScene;
