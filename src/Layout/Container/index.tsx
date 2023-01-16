import React from 'react';

function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-screen max-w-4xl mx-auto bg-white">{children}</main>
  );
}

export default Container;
