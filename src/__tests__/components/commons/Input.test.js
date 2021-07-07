import {screen, render} from '@testing-library/react';
import Input from '../../../components/commons/Input';

describe('Input component', () => {

    it('renders by type', () => {
        const {container} = render(<Input type='text'/>);
        container.querySelector('input[type=text]');
        //screen.getByLabelText(/login/i)
    });

    it('renders by label', () => {
        render(<Input type='text' label="Username" id="username"/>);
        screen.getByLabelText(/Username/i);
    });
});
