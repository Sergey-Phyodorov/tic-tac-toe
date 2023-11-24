import './button.css';
export const Button = ({ children, onClick, className, buttonStyle }) => {
	return (
		<button onClick={onClick} className={className} style={buttonStyle}>
			{children}
		</button>
	);
};
