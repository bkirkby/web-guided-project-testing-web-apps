import React from 'react';
import { render, screen } from '@testing-library/react';

import AnimalForm from './AnimalForm';

import { lang } from '../App.test';

test("AnimalForm renders", () => {
  render(<AnimalForm />);
})