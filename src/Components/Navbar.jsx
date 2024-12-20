import React from 'react';
import { useTheme } from '../Components/utils/global.context'; 
const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <nav className={theme}> {/* Aplica el tema como clase */}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/favs">Favorites</a></li>

      </ul>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
