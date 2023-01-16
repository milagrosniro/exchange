import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { faCircleUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <header>
    <div>logo</div>
    <div>
    <FontAwesomeIcon icon={faUserCircle} />
    <span>example@gmail.com</span>
        </div>

</header>
  )
}

export default NavBar