import { calculateWinner } from '../utilities/calculateWinner';

const initialState = {
	board: Array(9).fill(null),
	currentPlayer: 'X',
	winner: null,
	winningLine: [],
};

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'MAKE_MOVE':
			if (state.winner) {
				return state;
			}

			const newBoard = state.board.map((cell, index) => {
				if (index === action.index && cell === null) {
					return state.currentPlayer;
				}
				return cell;
			});

			const { winner, line } = calculateWinner(newBoard);
			return {
				...state,
				board: newBoard,
				currentPlayer: winner
					? state.currentPlayer
					: state.currentPlayer === 'X'
					? 'O'
					: 'X',
				winner: winner,
				winningLine: line,
			};
		case 'RESET_GAME':
			return initialState;

		default:
			return state;
	}
};
