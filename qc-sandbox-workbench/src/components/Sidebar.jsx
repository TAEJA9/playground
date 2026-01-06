import React, { useState } from 'react';
import { ChevronDown, ChevronRight, PlusCircle, LayoutGrid, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ATOMIC_LIBRARY = [
  {
    category: 'Sign-up',
    items: ['Click Sign-up Button', 'Enter Email', 'Enter Password', 'Verify Email', 'Submit Form']
  },
  {
    category: 'Login',
    items: ['Click Login Button', 'Enter Credentials', 'Forgot Password Flow', '2FA Verification']
  },
  {
    category: 'My Page',
    items: ['View Profile', 'Edit Profile', 'Change Password', 'Logout']
  },
  {
    category: 'Download',
    items: ['Download PDF', 'Download CSV', 'Verify File Content']
  }
];

const Sidebar = ({ onAddNode, onAddGroup }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleAddAll = (e, items) => {
    e.stopPropagation();
    onAddGroup(items);
  };

  return (
    <motion.div 
      initial={{ width: 300 }}
      animate={{ width: collapsed ? 60 : 300 }}
      className="h-full bg-white border-r-3 border-gray-100 flex flex-col shadow-lg z-20 relative transition-all duration-300 ease-in-out"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-4 top-4 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 z-50 text-gray-600"
      >
        {collapsed ? <ChevronsRight size={16} /> : <ChevronsLeft size={16} />}
      </button>

      {/* Header */}
      <div className={`p-4 border-b border-gray-100 ${collapsed ? 'flex justify-center' : ''}`}>
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <LayoutGrid size={24} className="text-blue-600 min-w-[24px]" />
          {!collapsed && <span className="font-bold text-lg text-gray-800">Library</span>}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-2 scrollbar-hide">
        {!collapsed ? (
            ATOMIC_LIBRARY.map((group) => (
            <div key={group.category} className="mb-2">
                <div 
                onClick={() => toggleCategory(group.category)}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer group transition-colors"
                >
                <div className="flex items-center gap-2 font-bold text-gray-700">
                    {expandedCategories[group.category] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    <span>{group.category}</span>
                </div>
                <button
                    onClick={(e) => handleAddAll(e, group.items)}
                    className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-200"
                >
                    Add All
                </button>
                </div>

                <AnimatePresence>
                {expandedCategories[group.category] && (
                    <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden ml-4 pl-4 border-l-2 border-gray-100"
                    >
                    {group.items.map((item) => (
                        <div
                        key={item}
                        onClick={() => onAddNode(item)}
                        className="py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md cursor-pointer flex items-center gap-2 transition-colors mb-1"
                        >
                        <PlusCircle size={14} className="opacity-50" />
                        {item}
                        </div>
                    ))}
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
            ))
        ) : (
            // Collapsed Icons View (Tooltip could be added)
            ATOMIC_LIBRARY.map((group) => (
                <div key={group.category} className="mb-4 flex justify-center group relative">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-blue-50 text-gray-600 hover:text-blue-600">
                        <span className="font-bold text-sm">{group.category[0]}</span>
                    </div>
                     {/* Hover Popup for collapsed view could be implemented here */}
                </div>
            ))
        )}
      </div>
    </motion.div>
  );
};

export default Sidebar;
