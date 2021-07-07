import {screen, render} from '@testing-library/react';
import Button from "../../../components/commons/Button";
import { create } from "react-test-renderer";
import userEvent from "@testing-library/user-event";

describe("Button component", () => {
    test.skip("Matches the snapshot", () => {
        const button = create(<Button>Cliccami</Button>);
        expect(button.toJSON()).toMatchSnapshot();
    });

    it("Invoke its callback on click", () => {
        const handleClick = jest.fn()

        render(<Button handleClick={handleClick}>Cliccami</Button>)
        userEvent.click(screen.getByText(/cliccami/i))
        expect(handleClick).toHaveBeenCalledTimes(1)
        expect(handleClick).toHaveBeenCalledWith('prova', 1)
    })
});
