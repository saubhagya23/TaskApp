import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../index';
// import { render } from '../../../utils/test-utils'
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders button without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button/>, div)
})

it("renders button correctly", () => {
  const { getByTestId } = render(<Button btnText="click me" />);
  expect(getByTestId('button')).toHaveTextContent("click me")
})

it("renders button correctly", () => {
  const { getByTestId } = render(<Button btnText="logout" />);
  expect(getByTestId('button')).toHaveTextContent("logout")
})

it("matches snapshot", () => {
  const buttonTree = renderer.create(<Button btnText="click me"></Button>).toJSON();
  expect(buttonTree).toMatchSnapshot();
})