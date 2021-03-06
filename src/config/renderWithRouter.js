import React from 'react';
import { render } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

// This is to avoid errors like 'this.props.history.push' not found on fireEvent.
function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

export default renderWithRouter;