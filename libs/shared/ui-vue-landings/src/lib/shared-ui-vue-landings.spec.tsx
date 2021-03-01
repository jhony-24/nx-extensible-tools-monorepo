import React from 'react';
import { render } from '@testing-library/react';

import SharedUiVueLandings from './shared-ui-vue-landings';

describe('SharedUiVueLandings', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiVueLandings />);
    expect(baseElement).toBeTruthy();
  });
});
