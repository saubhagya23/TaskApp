import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { render, fireEvent, screen } from './utils/test-utils'
import { render } from '@testing-library/react';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

it('Renders the connected app with initialState', () => {
  const div = document.getElementById('app-main-div');
  render(<App />, div)
})
