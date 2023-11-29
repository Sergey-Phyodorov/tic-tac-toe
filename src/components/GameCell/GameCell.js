import { Button } from '../../ui/Button/Button';

import { useSelector, useDispatch } from 'react-redux';
import { makeMove } from '../../redux/actions';
import {
	selectBoard,
	selectWinner,
	selectWinningLine,
} from '../../redux/selectors';

export const GameCell = ({ value, indexCell }) => {
	const dispatch = useDispatch();
	const gameBoard = useSelector(selectBoard);
	const gameWinner = useSelector(selectWinner);
	const winningLine = useSelector(selectWinningLine);

	const isWinningCell = winningLine.includes(indexCell);

	const cellStyle = {
		width: '60px',
		height: '60px',
		fontSize: '30px',
		backgroundColor: isWinningCell ? 'rgb(0, 28, 63)' : '',
		borderColor: isWinningCell ? 'rgb(0, 28, 63)' : '',
		color: isWinningCell ? 'rgb(255, 212, 59)' : '',
	};

	const handleCellClick = (index) => {
		if (gameWinner || gameBoard[index]) {
			return;
		}
		dispatch(makeMove(index));
	};

	return (
		<Button
			buttonStyle={cellStyle}
			onClick={() => handleCellClick(indexCell)}>
			{value}
		</Button>
	);
};
