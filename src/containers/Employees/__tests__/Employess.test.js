import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import { cleanup, render, waitForElement } from 'react-testing-library';

import store from '../../../store';
import employees from '../Employees/Employees';
import { API_URL, API_KEY } from '../../../config/index'
import { SEARCH_TEXT } from '../../../actions/actions';


describe('employees Component', () => {
  let renderedComponent;
  const fetchemployees = async () => {
    const period = 7;
    const url = `${API_URL}/${period}.json?api-key=${API_KEY}`;
    const { data: { results = [] } } = await axios.get(url);
    return results;
  };
  
  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <employees />
      </Provider>
    );
  });

  afterEach(() => cleanup());

  it('renders component', () => {
    expect(renderedComponent.container).toMatchSnapshot();
  });

  it('should render all NY-Times-employees', async () => {
    const { getAllByTestId } = renderedComponent;

    const results = await fetchemployees();
    await waitForElement(() => getAllByTestId('nytimes-card'));
    expect(getAllByTestId('nytimes-card').length).toEqual(results.length);
  });

  it('should render only matched searchText NY-Times-employees', async () => {
    const searchText = 'The';
    store.dispatch({
      type: SEARCH_TEXT,
      payload: {
        search: searchText,
    }
    });
    const { getAllByTestId } = renderedComponent;

    const results = await fetchemployees();
    const matchedResults = results.filter(({ title }) => {
      if (title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      return false;
    });
    await waitForElement(() => getAllByTestId('nytimes-card'));
    expect(getAllByTestId('nytimes-card').length).toEqual(matchedResults.length);
  });
});
