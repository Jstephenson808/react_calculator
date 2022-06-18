import {render, screen} from "@testing-library/react";
import Calculator from "./Calculator";

describe('Calculator', () => {
    it('should have input field', () => {
        render(<Calculator />);

        expect(screen.getByLabelText('Input')).toBeInTheDocument();
    })
})