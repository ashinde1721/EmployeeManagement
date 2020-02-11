import React from 'react';
import { Provider } from 'react-redux';

import renderWithRouter from '../../../config/renderWithRouter';
import store from '../../../store';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  it('renders component without breaking existing snapshot ui changes', () => {
    const { container } = renderWithRouter(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
})