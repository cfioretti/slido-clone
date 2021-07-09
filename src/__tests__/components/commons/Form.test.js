import { screen, render } from '@testing-library/react';
import Input from '../../../components/commons/Input';
import Button from '../../../components/commons/Button';
import Form from '../../../components/commons/Form';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('Form component', () => {
  it('form submit', () => {
    const handleSubmit = jest.fn();

    render(
      <Form onSubmit={handleSubmit}>
        <Input type='text' label='Username' id='username' />
        <Input type='text' label='Password' id='password' />
        <Button type='submit'>Sign in</Button>
      </Form>
    );
    userEvent.click(screen.getByText(/Sign in/i));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
  // test button submit event
});
