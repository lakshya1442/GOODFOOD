import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

it("testing the rendering of contact component",()=>{
    render(<Contact/>)
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})


// test("testing the inputs in contact componet",()=>{
//     render(<Contact/>)
//     const inputs=screen.getAllByRole("textbox");
//     expect(inputs.length).toBe(2);
// })


test("testing the inputs in Contact component", () => {
    render(<Contact></Contact>);
    const inputs = screen.getAllByRole("textbox"); // Use "textbox" for text inputs
    expect(inputs.length).toBe(3); // Expect 2 text inputs
});