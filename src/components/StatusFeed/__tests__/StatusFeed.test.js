import React from 'react';
import { mount } from 'enzyme';

import StatusFeed from '../index';

describe('<StatusFeed />', () => {
  it('should expose stats', () => {
    jest.useFakeTimers();
    const postsCallbackMock = jest.fn();

    mount(<StatusFeed>{postsCallbackMock}</StatusFeed>);
    jest.advanceTimersByTime(1000);
    expect(postsCallbackMock).toHaveBeenCalledWith({
      activeUsers: 2,
      purchasesCompleted: 10,
    });
  });

  it('should render with proper stats', () => {
    jest.useFakeTimers();

    const wrapper = mount(
      <StatusFeed>
        {(stats) => (
          <div>
            <div className="users">{stats.activeUsers}</div>
            <div className="purchases">{stats.purchasesCompleted}</div>
          </div>
        )}
      </StatusFeed>,
    );
    jest.advanceTimersByTime(1000);
    expect(wrapper.find('.users').text()).toEqual('2');
    expect(wrapper.find('.purchases').text()).toEqual('10');
  });
});
