import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import reactLogo from '../../assets/icons/react.svg';
import addBusiness from '../../assets/icons/add-business.svg';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="h-[calc(40px+2rem)] p-4 flex justify-between">
      <Link to="/" className="flex gap-2 h-10">
        <img src="/public/vite.svg" alt="vite-logo" />
        <img src={reactLogo} alt="react-logo" />
      </Link>
    </nav>
  );
}

export default Navbar;
