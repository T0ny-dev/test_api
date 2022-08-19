import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Login from '../src/components/login';


test ('render button submit', async () => {
  render(<Login />);
  const getEmail = screen.getByRole('inputEmail');
  const getDiscord = screen.getByRole('inputDiscord');
  const getsubmit = screen.getByRole('submit');

  userEvent.type(getEmail, 'actinver7@gmail.com');
  userEvent.type(getDiscord, '713113842015797349');
  userEvent.click(getsubmit)
  
})