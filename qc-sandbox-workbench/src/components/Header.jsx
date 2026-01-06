import React from 'react';
import { useSession } from '../context/SessionContext';
import { User, Monitor, Globe } from 'lucide-react';

const Header = () => {
  const { session } = useSession();

  if (!session) return null;

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b-3 border-gray-100 px-6 flex items-center justify-between z-40 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
          QC
        </div>
        <h1 className="text-lg font-bold text-gray-800">Sandbox Workbench</h1>
      </div>

      <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200">
          <User size={16} className="text-gray-400" />
          <span className="font-bold text-gray-800">{session.testerName}</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe size={16} className="text-gray-400" />
          <span>{session.browser}</span>
        </div>
        <div className="flex items-center gap-2">
          <Monitor size={16} className="text-gray-400" />
          <span>{session.environment}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
