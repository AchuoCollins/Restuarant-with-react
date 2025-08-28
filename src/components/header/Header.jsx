import React from 'react'
import Navlogo from './Navlogo'
import Navlinks from './Navlinks'
import Navuser from './Navuser'

function Header() {
  return (
    <div className='header'>
        <Navlogo />
        <Navlinks />
        <Navuser />
    </div>
  )
}

export default Header
