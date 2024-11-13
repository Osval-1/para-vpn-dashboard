import React from 'react'
import { logo } from '../../assets'
import SidebarItem from '../SideBarItem'

const SideBar  = () => {
  return (
    <section className='border w-1/4 h-screen'>
        <section>
            <figure>
            <img src={logo} alt="logo" />
            </figure>
        </section>
        <section>
            <SidebarItem/>
        </section>
      
    </section>
  )
}

export default SideBar
