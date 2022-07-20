import React from 'react';
import './Body.css';
import Find_Me from './Body_Components/Find_Me.jsx';
import Landing from './Body_Components/Landing.jsx';
import Work from './Body_Components/Work.jsx';

function Body() {
  return (
    <div id='body-parent'>
      Body will be here
      <Find_Me></Find_Me>
      <Landing></Landing>
      <Work></Work>
    </div>
  );
}

export default Body;