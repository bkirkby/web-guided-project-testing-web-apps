import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Arrange, Act, Assert

// test("bogus checks if true is truthy", () => {
// describe("bogus", () => {
//   it("checks if true is truthy", () => {
//     expect(true).toBeTruthy()
//   })
// })

const lang = { species: 'Species', age: 'Age', notes: 'Notes' }

test("App renders", () => {
  // render(<App lang={lang} />)
  render(<App lang={lang} />)
})

test("header is rendered properly", () => {
  render(<App lang={lang} />)

  // const h1 = screen.getByText('Add New Animal')
  // const h1 = screen.getByText('Add New Animal')
  const h1 = screen.getByText(/Add New Anima/i)

  expect(h1).toBeDefined();
})
