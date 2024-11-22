import { render, screen } from "@testing-library/react";
import { describe,it,expect } from "vitest";
import Header from ".";

describe("Header",()=>{
    it("Header component renders",()=>{
        render(<Header/>)
        expect(screen.getByText("Services")).toBeInTheDocument()
    })
})