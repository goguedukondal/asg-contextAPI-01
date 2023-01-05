
import React from "react";

import { useContext } from "react";
import contextTheme from "./Context";
const Service = () => {
  const{isLight}=useContext(contextTheme);
  return (
    <div className={isLight===true?"Light":"Dark"}>
      
        
      <h1>Our service are not available</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae quas aliquid necessitatibus eius voluptate expedita, sed esse, minus officia recusandae illo hic commodi aliquam officiis culpa sit, modi asperiores?</p>
    </div>
  )
}

export default Service;