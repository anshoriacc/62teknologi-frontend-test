import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import reactLogo from '../../assets/icons/react.svg';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="h-[calc(40px+2rem)] p-4 flex justify-between">
      <Link className="flex gap-2 h-10" to="/">
        <img src="/public/vite.svg" alt="vite-logo" />
        <img src={reactLogo} alt="react-logo" />
      </Link>
      {location.pathname !== '/add' ? (
        <Link to="/add">
          <div className="h-10 w-10 py-1 px-1 bg-slate-100 rounded-lg border-2 border-slate-200 font-semibold flex items-center justify-center text-slate-600 hover:bg-slate-200">
            +
          </div>
        </Link>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Navbar;
