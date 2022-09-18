import React, { useState } from 'react'
const Counter = ({ value, name, onDelete, id, onIncrement, onDecrement }) => {
	const formatValue = () => {
		return value === 0 ? 'empty' : value
	}
	const getBageClasses = () => {
		let classes = 'badge m-2 '
		classes += value === 0 ? 'bg-warning' : 'bg-primary'
		return classes
	}

	return (
		<div>
			<span>{name}</span>
			<span className={getBageClasses()}>{formatValue()}</span>
			<button
				className="btn btn-primary btn-sm m-2"
				onClick={() => onIncrement(id)}
			>
				+
			</button>
			<button
				className="btn btn-primary btn-sm m-2"
				onClick={() => onDecrement(id)}
			>
				-
			</button>
			<button className="btn btn-danger m-2" onClick={() => onDelete(id)}>
				Delete
			</button>
		</div>
	)
}

export default Counter
