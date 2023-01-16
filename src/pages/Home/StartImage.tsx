import React from 'react';

import search from '../../assets/icons/search.svg';

function StartImage() {
  return (
    <div className="grow flex justify-center items-center">
      <div className="w-80 h-80 bg-slate-50 flex flex-col justify-center items-center rounded-full">
        <img src={search} alt="search-logo" className="h-[50%] opacity-40" />
        <p className="opacity-40 text-center">
          Start search by providing location or <br />
          latitude & longitude.
        </p>
      </div>
    </div>
  );
}

export default StartImage;
