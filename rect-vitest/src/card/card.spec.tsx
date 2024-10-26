import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import Card from "./card.tsx";

describe('Card test:',() => {
    afterEach(cleanup);
    beforeEach(()=>{
        render(<Card />
        );
    })

    it('should render title', () => {
        screen.getByText('Título card');
    });

    it('should increment count when user clicks on Increment button', () => {
        const currentCountValue = parseInt(screen.getByRole('count-indicator').innerText);
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);
        const updatedCountValue = parseInt(screen.getByRole('count-indicator').innerText);

        expect(updatedCountValue).toBe(currentCountValue + 1);
    });
});