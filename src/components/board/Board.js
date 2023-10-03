import { SquareLayout } from '../square/Square';
import { LabelLayout } from '../label/Label';
import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './board.module.css';
import { calculateWinner } from '../../utilities/utilities';
import { ButtonLayout } from '../button/Button';

export function BoardContainer() {
	const [xIsNext, setXIsNext] = useState(true);
	const [squares, setSquares] = useState(Array(9).fill(null));

	function handleClick(index) {
		if (squares[index] || calculateWinner(squares)) {
			return;
		}
		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[index] = 'X';
		} else {
			nextSquares[index] = 'O';
		}
		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	}

	function handleRestartClick() {
		setSquares(Array(9).fill(null));
		setXIsNext(true);
	}

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = 'Победитель: ' + winner;
	} else {
		status = 'Ход игрока: ' + (xIsNext ? 'X' : 'O');
	}

	return (
		<BoardLayout
			handleClick={handleClick}
			handleRestartClick={handleRestartClick}
			status={status}
			squares={squares}
		/>
	);
}

function BoardLayout({ handleClick, handleRestartClick, status, squares }) {
	return (
		<>
			<LabelLayout status={status} />

			<div className={styles.boardRow}>
				{squares.map((square, index) => {
					return (
						<SquareLayout
							key={index}
							value={square}
							onSquareClick={() => handleClick(index)}
						/>
					);
				})}
			</div>

			<ButtonLayout onClick={handleRestartClick} />
		</>
	);
}

BoardLayout.propTypes = {
	handleClick: PropTypes.func.isRequired,
	handleRestartClick: PropTypes.func.isRequired,
	status: PropTypes.string.isRequired,
	squares: PropTypes.array.isRequired,
};
