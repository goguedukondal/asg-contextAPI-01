import React from 'react'

import { useContext } from 'react';
import contextTheme from './Context';

const Button = () => {
    const {isLight,changeTheme}=useContext(contextTheme);
  return (
    <div cl>
      <button className="btn" onClick={()=>changeTheme(!isLight)}>Toggle Theme to {isLight===true?"Dark":"Light"}</button>
    </div>
  )
}

export default Button;