import React from 'react';
import { useSession } from '../context/SessionContext';
import { Download, RefreshCw, User, CheckCircle, AlertCircle, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = ({ nodes }) => {
  const { session } = useSession();

  const total = nodes.length;
  const pass = nodes.filter(n => n.data.status === 'pass').length;
  const fail = nodes.filter(n => n.data.status === 'fail').length;

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(nodes, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "qc_scenario_report.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleSync = () => {
    alert("Syncing report to central server... (Mock)");
  };

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-2xl border-3 border-gray-100 px-8 py-3 flex items-center gap-8 z-30 min-w-[600px] justify-between"
    >
      {/* Stats */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Layers size={20} className="text-gray-400" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-bold">TOTAL</span>
            <span className="text-xl font-bold text-gray-800 leading-none">{total}</span>
          </div>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="flex items-center gap-2">
          <CheckCircle size={20} className="text-green-500" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-bold">PASS</span>
            <span className="text-xl font-bold text-green-600 leading-none">{pass}</span>
          </div>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="flex items-center gap-2">
          <AlertCircle size={20} className="text-red-500" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-bold">FAIL</span>
            <span className="text-xl font-bold text-red-600 leading-none">{fail}</span>
          </div>
        </div>
      </div>

      {/* User Info (Mini) */}
      <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <User size={14} className="text-gray-500" />
        </div>
        <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-700 leading-tight">{session?.testerName || 'Guest'}</span>
            <span className="text-[10px] text-gray-400 leading-tight">{session?.environment} • {session?.browser}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button 
          onClick={handleSync}
          className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-bold hover:bg-blue-100 transition-colors text-sm"
        >
          <RefreshCw size={16} />
          SYNC REPORT
        </button>
        <button 
          onClick={handleExport}
          className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
          title="Download JSON"
        >
          <Download size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default Dashboard;
