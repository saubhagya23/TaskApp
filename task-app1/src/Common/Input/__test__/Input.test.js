import React from 'react';
import ReactDOM from 'react-dom';
import Input from './../index';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders input without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Input/>, div)
})

it('renders input correctly', () => {
  const {getByTestId} = render(<Input type="email"/>);
  expect(getByTestId('input')).toHaveValue("");
})

it("matches snapshot", () => {
  const inputTree = renderer.create(<Input btnText="click me"></Input>).toJSON();
  expect(inputTree).toMatchSnapshot();
})