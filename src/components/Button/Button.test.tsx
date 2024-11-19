import { render, screen } from '@testing-library/react'
import { describe,it ,expect,vi} from 'vitest'
import userEvent from '@testing-library/user-event';
import Button from '.'

describe("Button",()=>{
    it("renders Button conponent",()=>{
        render(<Button label='Press Me' onclick={()=>{}}/>)
        expect(screen.getByText("Press Me")).toBeInTheDocument()
        screen.debug()
    })
    it(" Button onclick handler fires when clicked",async()=>{
      const handleClick = vi.fn()
      render(<Button label='Click Me' onclick={handleClick}/>)
      await userEvent.click(screen.getByText("Click Me"))
      expect(handleClick).toHaveBeenCalledTimes(1)
    
    })
})