import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Login from '../src/components/Login'


test ('render button submit', async () => {
  render(<Login />);
  const getsubmit = screen.getByRole('emailsent');
  const getEmail = screen.getByRole('discord');
  const getDiscord = screen.getByRole('button')
  

  userEvent.type(getEmail, 'actinver7@gmail.com');
  userEvent.type(getDiscord, '713113842015797349');
  userEvent.click(getsubmit)
  
})