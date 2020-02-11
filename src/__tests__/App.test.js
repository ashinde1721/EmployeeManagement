import React from 'react';
import { Provider } from 'react-redux';
import { cleanup, render } from 'react-testing-library';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import store from '../store/index'
import App from '../containers/App';

describe('App Component', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  afterEach(() => cleanup());

  it('renders component and match ui snapshot to cover UI changes', () => {
    expect(renderedComponent.container).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
});
