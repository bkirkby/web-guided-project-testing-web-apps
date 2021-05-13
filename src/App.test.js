import React from 'react';
import { render } from '@testing-library/react';
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
  render(<App lang={lang} />)
})
