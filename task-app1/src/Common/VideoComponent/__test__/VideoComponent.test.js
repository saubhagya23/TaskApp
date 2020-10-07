import React from 'react';
import ReactDOM from 'react-dom';
import VideoComponent from './../index';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders input without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<VideoComponent/>, div)
})

it("renders video component correctly", () => {
  const { getByTestId } = render(<VideoComponent videoWidth="100%"/>)
  const videoCompSource = getByTestId('video-comp-source')
  expect(getByTestId('video-comp')).toContainElement(videoCompSource);
})

it("matches snapshot", () => {
  const videoCompTree = renderer.create(<VideoComponent videoWidth="100%" />).toJSON();
  expect(videoCompTree).toMatchSnapshot();
})
