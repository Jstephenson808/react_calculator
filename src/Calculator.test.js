import {render, screen} from "@testing-library/react";
import Calculator from "./Calculator";
import userEvent from "@testing-library/user-event";

describe('Calculator', () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Calculator />);
    });
    it('should have input field', () => {
        expect(screen.getByLabelText('Input')).toBeInTheDocument();
    })
    it('should have output field', () => {
        expect(screen.getByLabelText('Output')).toBeInTheDocument();
    })
    it('should have a calculate button', () => {
        expect(screen.getByText('Calculate')).toBeInTheDocument();
    })
    it('should have a + button', () => {
        expect(screen.getByText('+')).toBeInTheDocument();
    })
    it('should have a - button', () => {
        expect(screen.getByText('-')).toBeInTheDocument();
    })
    it('should have ÷ button', () => {
        expect(screen.getByText('÷')).toBeInTheDocument();
    })
    // Not sure about this one tbh, x could be found in lots of places
    it('should have x button', () => {
        expect(screen.getByText('x')).toBeInTheDocument();
    })
    it('should display one when one is input and calculate is pressed', () => {
        userEvent.type(screen.getByLabelText('Input'), '1');
        userEvent.click(screen.getByText('Calculate'));

        expect(screen.getByLabelText('Output')).toHaveValue('1');
    })
})