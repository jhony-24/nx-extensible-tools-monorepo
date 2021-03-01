import React from 'react';
import { render } from '@testing-library/react';

import UtilsMoneyFormats from './utils-money-formats';

describe('UtilsMoneyFormats', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilsMoneyFormats />);
    expect(baseElement).toBeTruthy();
  });
});
