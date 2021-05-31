import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='BoxList'>
				<NewBoxForm />
				<Box />
			</div>
		);
	}
}

export default BoxList;
