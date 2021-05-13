import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnimalForm from './AnimalForm';

import { lang } from '../App.test';

test("AnimalForm renders", () => {
  render(<AnimalForm lang={lang} />);
})

test("submitted form renders animal name", () => {
  const animal = 'Big Bear'
  render(<AnimalForm lang={lang} />)

  const speciesInput = screen.getByLabelText(/species/i)

  userEvent.type(speciesInput, animal);

  expect(speciesInput).toHaveValue(animal);

  // const submitButton = screen.getByRole("button");
  const submitButton = screen.getByTestId("submitButton");

  userEvent.click(submitButton);

  screen.getByText(animal)
  screen.getByText(/lion/i)
})