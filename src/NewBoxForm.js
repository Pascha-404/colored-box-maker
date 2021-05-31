import React, { Component } from 'react';
import './NewBoxForm.css';

class NewBoxForm extends Component {
	constructor(props) {
		super();
		this.state = { width: '', height: '', backgroundColor: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	takeValues(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleChange(evt) {
		this.takeValues(evt);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.addBox(
			this.state.width,
			this.state.height,
			this.state.backgroundColor
		);
		this.setState({ width: '', height: '', backgroundColor: '' });
	}

	render() {
		return (
			<form className='NewBoxForm' onSubmit={this.handleSubmit}>
				<label htmlFor='width'>Width</label>
				<input
					type='text'
					name='width'
					id='width'
					onChange={this.handleChange}
					value={this.state.width}
					placeholder='e.g. 50px, 50%, etc.'
				/>
				<label htmlFor='height'>Height</label>
				<input
					type='text'
					name='height'
					id='height'
					onChange={this.handleChange}
					value={this.state.height}
					placeholder='e.g. 50px, 50%, etc.'
				/>
				<label htmlFor='backgroundColor'>Background-Color</label>
				<input
					type='text'
					name='backgroundColor'
					id='backgroundColor'
					onChange={this.handleChange}
					value={this.state.backgroundColor}
					placeholder='e.g. magenta'
				/>
				<button>Add Box!</button>
			</form>
		);
	}
}

export default NewBoxForm;
