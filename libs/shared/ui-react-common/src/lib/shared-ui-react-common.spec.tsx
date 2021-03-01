import React from 'react';
import { render } from '@testing-library/react';

import SharedUiReactCommon from './shared-ui-react-common';

describe('SharedUiReactCommon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiReactCommon />);
    expect(baseElement).toBeTruthy();
  });
});
