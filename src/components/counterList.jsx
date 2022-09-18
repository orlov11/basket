import React, { useState } from 'react'
import Counter from './counter'
const CountersList = () => {
	const initinalState = [
		{ id: 0, value: 1, name: 'Ненужная вещь ' },
		{ id: 1, value: 2, name: 'Ложка' },
		{ id: 2, value: 5, name: 'Вилка' },
		{ id: 3, value: 3, name: 'Тарелка' },
		{ id: 4, value: 4, name: 'Набор минималиста' },
	]
	const [counters, setCounters] = useState(initinalState)
	const handleDelete = id => {
		const newCounters = counters.filter(item => item.id !== id)
		setCounters(newCounters)
	}
	const handleReset = () => {
		setCounters(initinalState)
	}
	const handleIncrement = id => {
		const newValue = counters.map(item => {
			if (item.id === id) {
				item.value += 1
			}
			return item
		})
		setCounters(newValue)
	}
	const handleDecrement = id => {
		const newValue = counters.map(item => {
			if (item.id === id) {
				item.value -= 1
			}
			return item
		})
		setCounters(newValue)
	}

	return (
		<>
			{counters.map(count => (
				<Counter
					key={count.id}
					onDelete={handleDelete}
					onIncrement={handleIncrement}
					onDecrement={handleDecrement}
					{...count}
				/>
			))}
			<button className="btn btn-primary btn-sm m-2 " onClick={handleReset}>
				Сброс
			</button>
		</>
	)
}

export default CountersList
