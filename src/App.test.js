import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for better matchers
import App from "./App"; // Import your component

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".columns"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders with a specific class name2", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName2 = container.querySelector(".root"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName2).toBeInTheDocument();
});

test("renders with a specific class name2", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName2 = container.querySelector(".root"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName2).toBeInTheDocument();
});

test("renders with a specific class name3", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName3 = container.querySelector("conainer"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName3).toBeInTheDocument();
});

test("renders with a specific tag", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithTag = container.querySelector("noscript"); // Replace 'your-class-name' with the actual class name
  expect(elementWithTag).toBeInTheDocument();
});

test("renders with a specific tag2", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithTag = container.querySelector("title"); // Replace 'your-class-name' with the actual class name
  expect(elementWithTag).toBeInTheDocument();
});

import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();
  });
});

import * as React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });
});