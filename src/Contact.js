
import React from "react";

import { useContext } from "react";
import contextTheme from "./Context";
const Contact = () => {
  const{isLight}=useContext(contextTheme);
  return (
    <div className={isLight===true?"Light":"Dark"}>
      
        
        
        <h1>You can mail me help@geekster.in</h1>
        
    </div>
  );
}

export default Contact;