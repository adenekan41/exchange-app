/* -------------------------- External Dependencies ------------------------- */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

/* --------------------------- Internal Dependency -------------------------- */
import Select from '..';

const SelectMock = ({ ...rest }) => {
	return (
		<>
			<Select
				id="select"
				label="select"
				value="select"
				onChange={(e) => e.target.value}
				{...rest}
			>
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
			</Select>
		</>
	);
};

describe('Select Component', () => {
	afterEach(cleanup);

	it('Select Renders Without Crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<SelectMock />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('Select Renders Correctly With Attributes', () => {
		const { getByTestId } = render(<SelectMock />);
		// console.log();
		expect(getByTestId('select')).not.toHaveAttribute('disabled');
	});

	it('Select matches snapshot', () => {
		const tree = renderer.create(<SelectMock />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('Select matches snapshot when tocuhed', () => {
		const tree = renderer.create(<SelectMock value="" disabled />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
