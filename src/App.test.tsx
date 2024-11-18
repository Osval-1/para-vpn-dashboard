import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Button from './components/Button'
import {describe,it} from "vitest"

describe('Button', () => {
  it('renders the App component', () => {
    render(<Button label='asd' onclick={()=>console.log("home")} />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})