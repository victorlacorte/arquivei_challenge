import React from 'react';

import Main from 'components/Main';
import { shallowWithTheme } from 'commons/utils/testUtils';

describe('<Main />', () => {
  it('creates a Main component', () => {
    const wrapper = shallowWithTheme(<Main />);

    expect(wrapper).toMatchSnapshot();
  });
});
