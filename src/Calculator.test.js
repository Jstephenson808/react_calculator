import {render, screen} from "@testing-library/react";
import Calculator from "./Calculator";
import userEvent from "@testing-library/user-event";

const input1Field = () => screen.getByLabelText('Input 1');


function calculateButton() {
    return screen.getByText('Calculate');
}

describe('Calculator', () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Calculator />);
    });
    it('should have input 1 field', () => {
        expect(input1Field()).toBeInTheDocument();
    })
    it('should have output field', () => {
        expect(screen.getByLabelText('Output')).toBeInTheDocument();
    })
    it('should have a calculate button', () => {
        expect(calculateButton()).toBeInTheDocument();
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
    it('should display 1 when 1 is input1 and calculate is pressed', () => {
        userEvent.type(input1Field(), '1');
        userEvent.click(calculateButton());

        expect(screen.getByLabelText('Output')).toHaveValue('1');
    })
    it('should have an input 2 field', () => {
        expect(screen.getByLabelText('Input 2')).toBeInTheDocument();
    })
})