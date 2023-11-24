import './game-status.css';
export const GameStatus = ({ winner, currentPlayer }) => {
	let status;
	if (winner) {
		status = winner === 'Ничья' ? 'Ничья!' : `Победитель: ${winner}`;
	} else {
		status = `Ход игрока: ${currentPlayer}`;
	}

	return <div className="game-status">{status}</div>;
};
