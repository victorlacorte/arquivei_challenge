import React from 'react';
import { shallow } from 'enzyme';

import Button from 'components/Button';
import { shallowWithTheme } from 'commons/utils/testUtils';

describe('<Button />', () => {
  it('creates a Button component', () => {
    const wrapper = shallowWithTheme(<Button />);

    expect(wrapper).toMatchSnapshot();
  });

  it('creates a disabled Button component', () => {
    const wrapper = shallow(<Button disabled />);

    expect(wrapper.props().disabled).toBe(true);
  });
});
