import React from 'react';
import { Link } from 'react-router-dom';

import reactLogo from '../../assets/icons/react.svg';

function Footer() {
  return (
    <footer className="p-4 flex justify-between items-center text-slate-600">
      <p>
        © 2023 Achmad Anshori. <br />
        Built for 62teknologi's technical test.
      </p>
      <div>
        <p className="text-sm text-center">Built with:</p>
        <div className="flex gap-2 h-10">
          <a href="https://vitejs.dev/" target="_blank">
            <img className="h-10" src="/public/vite.svg" alt="vite-logo" />
          </a>
          <a href="https://reactjs.org/" target="_blank">
            <img className="h-10" src={reactLogo} alt="react-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
