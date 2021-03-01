import React from 'react';
import { render } from '@testing-library/react';

import UtilsDateFormats from './utils-date-formats';

describe('UtilsDateFormats', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilsDateFormats />);
    expect(baseElement).toBeTruthy();
  });
});
