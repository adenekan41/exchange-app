/* -------------------------- External Dependencies ------------------------- */
import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render } from '@testing-library/react';

import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

/* --------------------------- Internal Dependency -------------------------- */
import ErrorBoundary from '..';

describe('ErrorBoundary Component', () => {
	afterEach(cleanup);

	it('ErrorBoundary Renders Without Crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ErrorBoundary>Empty</ErrorBoundary>, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it(`shows the fallback when there's an error`, () => {
		const Throws = () => {
			return <>Heloos </>;
		};
		const { unmount } = render(
			<ErrorBoundary>
				<Throws />
			</ErrorBoundary>
		);
		unmount();
	});

	it('ErrorBoundary matches snapshot', () => {
		const tree = renderer.create(<ErrorBoundary>Empty</ErrorBoundary>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
