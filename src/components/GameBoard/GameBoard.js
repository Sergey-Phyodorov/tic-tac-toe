import './game-board.css';

import { useSelector, useDispatch } from 'react-redux';
import { selectBoard } from '../../redux/selectors';
import { RESET_GAME } from '../../redux/actions';

import { GameCell } from '../GameCell/GameCell';
import { GameStatus } from '../GameStatus/GameStatus';
import { Button } from '../../ui/Button/Button';

export const GameBoard = () => {
	const dispatch = useDispatch();
	const gameBoard = useSelector(selectBoard);

	const handleResetGame = () => {
		dispatch(RESET_GAME);
	};

	return (
		<>
			<GameStatus />

			<div className={'game-board-cell'}>
				{gameBoard.map((cell, index) => (
					<GameCell key={index} indexCell={index} value={cell} />
				))}
			</div>

			<Button onClick={handleResetGame}>Начать игру</Button>
		</>
	);
};
