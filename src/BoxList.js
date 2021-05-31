import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';

class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: [
				{ width: '100px', height: '100px', backgroundColor: 'red' },
				{ width: '100px', height: '100px', backgroundColor: 'red' },
			],
		};
		this.addBox = this.addBox.bind(this);
		this.deleteBox = this.deleteBox.bind(this);
	}

	addBox(width, height, backgroundColor) {
		const newBox = {
			width: width,
			height: height,
			backgroundColor: backgroundColor,
			id: uuid(),
		};
		this.setState(curState => ({ boxes: [...curState.boxes, newBox] }));
	}

	deleteBox(id) {
		let boxes = this.state.boxes;
		const targetIndx = boxes.findIndex(box => box.id === id);
		boxes.splice(targetIndx, 1);
		this.setState({ boxes });
	}

	renderBoxes(evt) {
		return this.state.boxes.map(box => (
			<Box
				width={box.width}
				height={box.height}
				backgroundColor={box.backgroundColor}
				deleteBox={this.deleteBox}
				key={box.id}
				id={box.id}
			/>
		));
	}

	render() {
		return (
			<div className='BoxList'>
				<NewBoxForm addBox={this.addBox} key='boxForm' />
				{this.renderBoxes()}
			</div>
		);
	}
}

export default BoxList;
