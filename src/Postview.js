import React from 'react';
import Nav from './Nav';
 
export default function Postview({children}) {
  return <div id='container'>
    <Nav />
    <div id="text-content">
      {children}
    </div>
  </div>;
}
