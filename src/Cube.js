import React from 'react';
import * as THREE from 'three';
import { connect } from 'react-redux';

class Cube extends React.Component {
	constructor(props) {
		super(props);

		this.geometry = new THREE.PlaneBufferGeometry(0.3, 0.3);
		this.material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );

		this.plane = new THREE.Mesh(this.geometry, this.material);
		this.rotate = this.rotate.bind(this);
		this.moveToTarget = this.moveToTarget.bind(this);
	}

	rotate() {
		this.cube.rotation.x += 0.1;
		this.cube.rotation.y += 0.1;

		setTimeout(this.rotate, 40);
	}

	moveToTarget() {
		// Simple linear interpolation
		let currentX = this.cube.position.x;
		let currentY = this.cube.position.y;

		let targetX = this.props.targetPosition[0];
		let targetY = this.props.targetPosition[1];

		let err = Math.abs((targetX - currentX) + (targetY - currentY));
		if (err < 0.2) {
			return;
		}

		let velX = (targetX - currentX) * 0.01;
		this.cube.position.x += velX;

		let velY = (targetY - currentY) * 0.01;
		this.cube.position.y += velY;

	    setTimeout(this.moveToTarget, 32);
	}

	componentDidMount() {
		var geometry = new THREE.BoxBufferGeometry(0.8, 0.8, 0.8);
		var loader = new THREE.TextureLoader();
		let material = new THREE.MeshBasicMaterial({
			map: loader.load('cube.png'),
		});

		this.cube = new THREE.Mesh(geometry, material);
		this.props.scene.add(this.cube);
		this.cube.position.z = 1;
		this.rotate();
	}

	componentWillUnmount() {
		this.props.scene.remove(this.cube);
	}

	render() {
		if (this.cube) {
			this.moveToTarget();
		}

		return (null);
	}
}

/* We updated the target position of the cube so that we can start lerping to it */
function mapStateToProps(state) {
    return {
        targetPosition: [...state]
    };
}

export default connect(mapStateToProps, null)(Cube);
