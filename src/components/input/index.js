/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/* ----------------------------- Input PropTypes ---------------------------- */
const propTypes = {
	type: PropTypes.string,
	id: PropTypes.string,

	placeholder: PropTypes.string,
	label: PropTypes.string,

	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

/* --------------------------- Input defaultProps --------------------------- */
const defaultProps = {
	type: 'input',
	id: '0',
	placeholder: 'input',
	label: 'Label',
	value: '',
};

const Input = ({ id, type, placeholder, label, value, ...rest }) => {
	return (
		<InputContainer
			touched={value !== ''}
			disabled={rest?.disabled}
			data-testid="input"
		>
			{label && <label htmlFor={label}>{label}</label>}
			<input
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...rest}
				type={type}
				id={id}
				value={value}
				className="form-control"
				placeholder={placeholder}
				data-testid="inputs"
			/>
		</InputContainer>
	);
};

const InputContainer = styled.div`
	input {
		border: 1px solid #90969e40;
		box-sizing: border-box;
		border-radius: 4px;
		background: #ffffff;
		box-sizing: border-box;
		font-style: normal;
		font-family: var(--font-primary);
		font-weight: normal;
		font-size: 0.95rem;

		padding: 1.4rem 1.3rem;
		box-shadow: none;
		line-height: 150%;

		color: #8f9bb3;

		${(props) => (props.touched ? `box-shadow: none !important;` : ``)}
		&:focus {
			border: 1px solid var(--theme-primary) !important;
			box-shadow: none !important;
		}
	}
	label {
		font-weight: 700;
		font-size: 0.89rem;
		line-height: 150%;

		color: #151a30;
	}
`;

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;
