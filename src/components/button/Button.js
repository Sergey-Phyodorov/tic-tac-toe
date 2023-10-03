import styles from './button.module.css';
import PropTypes from 'prop-types';
export function ButtonLayout({ onClick }) {
	return (
		<button className={styles.button} onClick={onClick}>
			Начать заново
		</button>
	);
}

ButtonLayout.propTypes = {
	onClick: PropTypes.func.isRequired,
};
