import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnimalForm from './AnimalForm';

import { lang } from '../App.test';

test("AnimalForm renders", () => {
  render(<AnimalForm lang={lang} />);
})

test("submited form renders animal name", () => {
  render(<AnimalForm lang={lang} />)

  const speciesInput = screen.getByLabelText(/species/i)

  userEvent.type(speciesInput, 'Big Bear');

  expect(speciesInput).toHaveValue('Big Bear');
})