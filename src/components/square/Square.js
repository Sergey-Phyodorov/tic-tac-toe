import styles from './square.module.css';
import PropTypes from 'prop-types';
export function SquareLayout({ value, onSquareClick }) {
	return (
		<button className={styles.square} onClick={onSquareClick}>
			{value}
		</button>
	);
}

SquareLayout.propTypes = {
	value: PropTypes.string,
	onSquareClick: PropTypes.func,
};
