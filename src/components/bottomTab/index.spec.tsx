import { render } from '@test';

import { BottomTab } from './index';

describe('BottomTab component test', () => {
  it('renders without crashing', () => {
    const component = render(
      <BottomTab>
        <BottomTab.Item />
      </BottomTab>,
    );

    expect(component).toBeTruthy();
  });
});
