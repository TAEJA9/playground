import React, { useState } from 'react';
import { useSession } from '../context/SessionContext';
import { Monitor, Smartphone, Tablet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SessionModal = () => {
  const { session, startSession } = useSession();
  const [formData, setFormData] = useState({
    testerName: '',
    browser: 'Chrome',
    environment: 'PC',
  });

  if (session) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.testerName.trim()) {
      startSession(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md border-3 border-gray-100"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">QC Session Starter</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Tester Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-0 outline-none transition-colors"
              placeholder="Enter your name"
              value={formData.testerName}
              onChange={(e) => setFormData({ ...formData, testerName: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Browser</label>
            <select
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 outline-none"
              value={formData.browser}
              onChange={(e) => setFormData({ ...formData, browser: e.target.value })}
            >
              <option value="Chrome">Chrome</option>
              <option value="Safari">Safari</option>
              <option value="Firefox">Firefox</option>
              <option value="Edge">Edge</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Environment</label>
            <div className="flex gap-4">
              {['PC', 'Mobile', 'Tablet'].map((env) => (
                <button
                  key={env}
                  type="button"
                  onClick={() => setFormData({ ...formData, environment: env })}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${
                    formData.environment === env
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 text-gray-500 hover:border-gray-300'
                  }`}
                >
                  {env === 'PC' && <Monitor size={20} />}
                  {env === 'Mobile' && <Smartphone size={20} />}
                  {env === 'Tablet' && <Tablet size={20} />}
                  <span className="text-sm font-bold">{env}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gray-900 text-white rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg"
          >
            Start Session
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SessionModal;
