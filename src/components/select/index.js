/* -------------------------------------------------------------------------- */
/*                           External Depenedencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/* ---------------------------- Image Dependency ---------------------------- */
import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down.svg';

/* ---------------------------- Select propTypes ---------------------------- */
const propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	value: PropTypes.string,
};

/* --------------------------- Select defaultProps -------------------------- */
const defaultProps = {
	id: 'input',
	label: '',
	value: '',
};

const Select = ({ id, label, children, value, ...rest }) => {
	return (
		<SelectContainer
			touched={value !== ''}
			disabled={rest?.disabled}
			data-testid="select"
		>
			{label && <label htmlFor={label}>{label}</label>}
			<select
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...rest}
				id={id}
				value={value}
				className="form-control"
			>
				{children}
			</select>
			<ArrowDown />
		</SelectContainer>
	);
};

const SelectContainer = styled.div`
	select {
		border: 0px solid rgba(194, 204, 217, 0.25);
		box-sizing: border-box;
		border-radius: 4px;
		background: #ffffff;
		font-family: var(--font-primary);
		box-sizing: border-box;
		font-style: normal;

		font-size: 1.6rem;
		color: #017ffe;
		font-weight: 700;

		padding: 0rem 0rem;
		box-shadow: none;
		line-height: 150%;
		min-height: 46px;
		-webkit-appearance: none;

		${(props) => (props.touched ? `box-shadow: none !important;` : ``)}
		&:focus {
			border: 1px solid var(--theme-primary) !important;
			box-shadow: none !important;
		}
	}
	svg {
		position: absolute;
		right: 50px;
		margin-top: -1.7rem;
	}
	label {
		font-weight: 500;
		font-size: 0.89rem;
		line-height: 150%;
		/* identical to box height, or 21px */

		color: #151a30;
	}
`;

Select.defaultProps = defaultProps;

Select.propTypes = propTypes;

export default Select;
