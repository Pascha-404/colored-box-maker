import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
	constructor(props) {
		super();
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(evt) {
		this.props.deleteBox(this.props.id);
	}

	render() {
		const divStyle = {
			WebkitTransition: 'all',
			msTransition: 'all',
			width: this.props.width,
			height: this.props.height,
			backgroundColor: this.props.backgroundColor,
		};
		return (
			<div style={divStyle} className='Box'>
				<button onClick={this.handleDelete}>&#10006;</button>
			</div>
		);
	}
}

export default Box;
