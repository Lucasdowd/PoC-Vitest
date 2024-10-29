
import {fireEvent, render, screen} from "@testing-library/react"
import Prueba from "./Prueba.tsx";

describe("prueba suma", ()=>{
    test("should add two numbers", ()=>{
        expect(1 + 1).toBe(2);
    });
});


describe("Prueba", ()=>{

    beforeEach(()=>{
        render(<Prueba title="hola">
            <h3>content</h3>
            <p></p>
        </Prueba>
        );
    })


    test("should show the prueba component",()=>{
        expect(screen.getByText("hola")).toBeDefined()
    });

    test("should show title all the time", () =>{
        expect(screen.getByText("hola")).toBeDefined()
    });

    test("should not show the content at the start", () =>{
        expect(screen.queryByText(/content/i)).toBeNull()
    })

    test("should show the content white title is clicked", ()=>{
        const button = screen.getByText(/Open/i);
        fireEvent.click(button);
        expect(screen.queryByText(/content/i)).toBeDefined()
    })

    test("should hide the content white title is clicked", ()=>{
        const button = screen.getByText(/Open/i);
        fireEvent.click(button);
        fireEvent.click(button);
        expect(screen.queryByText(/content/i)).toBeNull()
    })
});