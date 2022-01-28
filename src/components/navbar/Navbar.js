import React, {useState} from 'react'
import { NavItems } from '../../data'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLine } from 'react-icons/ri'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    return (
        <div className='general'>
       <nav className='navbar'>
           <div className='mobile-container'>
          <a href='google.com'><img src='./images/logo.svg' alt='' className='logo'/></a>
          <div className='menu-item' onClick={handleClick}>
              {click ? <RiCloseLine /> : <GiHamburgerMenu />}
          </div>
         </div>

          <div className='box-shadow'>
          <div className={click ? 'nav-menu active' : 'nav-menu'}>
              {NavItems.map((item)=> {
                  const {id, text} = item;
                  return (
                      <ul key={id} className='nav-items'>
                          <li className='nav-item' onClick={closeMobileMenu}>{text}</li>
                      </ul>
                  )
              })}
              <button type='submit' className='view-plans'>view plans</button>
          </div>
          </div>
       </nav>
       </div>
    )
}

export default Navbar
