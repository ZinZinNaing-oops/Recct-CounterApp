import React, { Component } from 'react';
class Counter extends Component {

	styles = {
		fontSize: 10,
		fontWeight: 'bold'
	};

	render() {
		console.log('Counter - Rendered');
		return (
			<div>
				{this.props.children}
				<span className={this.getBadgeClass()} style={this.styles}>{this.formatValue()}</span>
				<button onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
				<button className='btn btn-danger btn-sm m-2' onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
			</div>
		);

	}

	getBadgeClass() {
		let badgeClass = "badge m-2 badge-";
		badgeClass += (this.props.counter.value) === 0 ? "warning" : "primary";
		return badgeClass;
	}

	formatValue() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	};

}

export default Counter;