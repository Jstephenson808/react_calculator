import {render, screen} from "@testing-library/react";
import Calculator from "./Calculator";

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
})