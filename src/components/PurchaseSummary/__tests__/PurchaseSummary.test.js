import React from 'react';

import PurchaseSummary from 'components/PurchaseSummary';
import { shallowWithTheme } from 'commons/utils/testUtils';

describe('<PurchaseSummary />', () => {
  it('creates a PurchaseSummary component', () => {
    const wrapper = shallowWithTheme(<PurchaseSummary />);

    // Default values have no discount
    expect(wrapper.find('styles__DiscountedTotal').children()).toHaveLength(0);

    expect(wrapper).toMatchSnapshot();
  });

  it('creates a PurchaseSummary component with total and discountedTotal props', () => {
    const wrapper = shallowWithTheme(<PurchaseSummary total={10} discountedTotal={8} />);

    expect(wrapper.find('styles__OriginalTotal').children()).toHaveLength(2);
    expect(wrapper.find('styles__DiscountedTotal').children()).toHaveLength(2);
  });
});
