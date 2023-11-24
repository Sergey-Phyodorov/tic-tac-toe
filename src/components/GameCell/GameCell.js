import { Button } from '../../ui/Button/Button';

export const GameCell = ({ value, onClick, highlight }) => {
	const cellStyle = {
		width: '60px',
		height: '60px',
		fontSize: '30px',
		backgroundColor: highlight ? 'rgb(0, 28, 63)' : '',
		borderColor: highlight ? 'rgb(0, 28, 63)' : '',
		color: highlight ? 'rgb(255, 212, 59)' : '',
	};

	return (
		<Button buttonStyle={cellStyle} onClick={onClick}>
			{value}
		</Button>
	);
};
