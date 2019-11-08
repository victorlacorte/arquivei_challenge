import React from 'react';

import Footer from 'components/Footer';
import { shallowWithTheme } from 'commons/utils/testUtils';

describe('<Footer />', () => {
  it('creates a Footer component', () => {
    const wrapper = shallowWithTheme(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});
