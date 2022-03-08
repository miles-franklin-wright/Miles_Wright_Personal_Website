import React from 'react';

function Header() {
  return(
    <div>
      header
      <div>Miles Franklin Wright</div>
      <ul>
        // nice to meet you; im miles; 
        <li>Knowing Me</li>
        <li>
          What I Do
          <ul>
            <li>International Relations and Sustainable Development</li>
            <li>Programming and Data Analysis</li>
            <li>Everything Else</li>
          </ul>
        </li>
        <li>Connect</li>
      </ul>
      <div> What people are saying about #miles </div>
    </div>
  )
}

export default Header;