import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Login from '../src/components/Login'


test ('render button submit', async () => {
  render(<Login />);
  const getsubmit = screen.getByRole('inputEmail');
  const getEmail = screen.getByRole('inputDiscord');
  const getDiscord = screen.getByRole('inputButton')
  

  userEvent.type(getEmail, 'actinver7@gmail.com');
  userEvent.type(getDiscord, '713113842015797349');
  userEvent.click(getsubmit)
  
})