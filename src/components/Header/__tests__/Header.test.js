import React from 'react';

import Header from 'components/Header';
import { shallowWithTheme } from 'commons/utils/testUtils';

describe('<Header />', () => {
  it('creates a Header component', () => {
    const wrapper = shallowWithTheme(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
