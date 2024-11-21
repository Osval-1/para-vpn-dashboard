import { describe,expect,it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from ".";
import { userEvent } from "@testing-library/user-event";

describe("Card",()=>{
    it("Card component renders",()=>{
        render(<Card header="Add Servers" body="add new servers to server" icon="img/2" onclick={()=>{}}/> )
        expect(screen.getByText("Add Servers")).toBeInTheDocument()
        expect(screen.getByText("add new servers to server")).toBeInTheDocument()
        screen.debug()
    })
    it("Card onClick handler Fires on click",async()=>{
        const handleClick = vi.fn()
        render(<Card header="delete Server" body="remove server" icon="img/2" onclick={handleClick}/>)
        await userEvent.click(screen.getByText("delete Server"))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
}
)