import React from 'react';

import Input from 'components/Input';
import { shallowWithTheme } from 'commons/utils/testUtils';

describe('<Input />', () => {
  it('creates a Input component', () => {
    const wrapper = shallowWithTheme(<Input />);

    expect(wrapper).toMatchSnapshot();
  });
});
