import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Home from '../home';

describe('test button rendering', () => {
    it('renders primary button with children', () => {
        render(<Home />);
    });
});
