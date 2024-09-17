import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <h2>{new Date().toUTCString().slice(0,16)}</h2>
            <h1>Foodoo</h1>
        </div>
        <div>
            <input placeholder='Search...'/>
        </div>
    </div>
  )
}

export default Navbar