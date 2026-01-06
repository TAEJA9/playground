import React from 'react';
import Header from './Header';
import SessionModal from './SessionModal';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-gray-900 font-sans">
      <Header />
      <main className="pt-16 h-screen overflow-hidden">
        {children}
      </main>
      <SessionModal />
    </div>
  );
};

export default Layout;
