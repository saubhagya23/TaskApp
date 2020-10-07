import React from 'react';
import ReactDOM from 'react-dom';
import Header from './../index';
// import { render } from '../../../utils/test-utils'
import { render } from '@testing-library/react';

it("renders header without crashing", () => {
  const div = document.getElementById('header-main-div');
  render(<Header/>, div)
})