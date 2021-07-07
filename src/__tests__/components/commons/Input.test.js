import { screen, render } from '@testing-library/react';
import Input from '../../../components/commons/Input';

describe('Input component', () => {
  it('renders', () => {
    const { container } = render(<Input type='text' />);
    container.querySelector('input[type=text]');
    //screen.getByLabelText(/login/i)
  });

  it('renders by label', () => {
    render(<Input type='text' aria-label='Username' />);
    screen.getByLabelText('Username');
  });
});
