import React from 'react';
import * as THREE from 'three';

class Webcam extends React.Component {
	constructor(props) {
		super(props);

		/* Here we request the webcam from the user and set the src of the video element to it */
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			var constraints = { video: true };

			navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
				let video = document.getElementById("video");
				Object.assign(video, {
					srcObject: stream,
					width: window.innerWidth,
					height: window.innerHeight,
					autoplay: true
				});
			}).catch( function ( error ) {
				console.error( 'Unable to access the camera feed', error);
			});
		} else {
			console.error('MediaDevices interface not available');
		}
	}

	componentDidMount() {
		let video = document.getElementById('video');

		/* We use the VideoTexture helper function to generate a texture from the video/camera feed */
		this.texture = new THREE.VideoTexture(video);
		this.texture.minFilter = THREE.LinearFilter;
		this.texture.magFilter = THREE.LinearFilter;

		this.geometry = new THREE.PlaneBufferGeometry(10, 8);
		this.material = new THREE.MeshBasicMaterial( { map: this.texture, side: THREE.DoubleSide } );

		let mesh = new THREE.Mesh(this.geometry, this.material);
		this.props.scene.add(mesh);
	}

	componentWillUnmount() {
		this.props.scene.remove(this.cube);
	}

	render() {
		/* 
		 * We dont want to display our video, it is only for generating a texture
		 * that will be mapped over a simple plain
		 */
		return <video id="video" autoPlay hidden></video>
	}
}

export default Webcam;
