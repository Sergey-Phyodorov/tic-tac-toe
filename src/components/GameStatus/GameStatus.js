import './game-status.css';

import { useSelector } from 'react-redux';
import { selectWinner, selectCurrentPlayer } from '../../redux/selectors';

export const GameStatus = () => {
	const gameWinner = useSelector(selectWinner);
	const currentPlayer = useSelector(selectCurrentPlayer);

	let status;
	if (gameWinner) {
		status =
			gameWinner === 'Ничья' ? 'Ничья!' : `Победитель: ${gameWinner}`;
	} else {
		status = `Ход игрока: ${currentPlayer}`;
	}

	return <div className="game-status">{status}</div>;
};
