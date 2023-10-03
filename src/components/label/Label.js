import PropTypes from 'prop-types';
export function LabelLayout({ status }) {
	return <label className="status">{status}</label>;
}

LabelLayout.propTypes = {
	status: PropTypes.string.isRequired,
};
