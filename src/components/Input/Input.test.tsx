import { fireEvent, render, screen } from "@testing-library/react";
import { describe,it,expect, vi } from "vitest";
import Input from ".";

describe("Input",()=>{
    it("Input component renders",()=>{
        render(<Input label="name" placeholder="name" value="john" type="text" onchange={()=>{}}/>)
        expect(screen.getByText("name")).toBeInTheDocument()
    })
    it("Input onclick handler fires",async()=>{
        const handleClick = vi.fn()
        render(<Input label="name" placeholder="name" value="john" type="text" onchange={handleClick}/>)
        // await userEvent.click(screen.getByText("john"))
        fireEvent.change(screen.getByText("name"))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
    
})