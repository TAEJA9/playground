import React, { memo } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CheckCircle, AlertCircle, Circle } from 'lucide-react';

const CustomNode = ({ data, id }) => {
  const { setNodes } = useReactFlow();

  const status = data.status || 'default';
  const issue = data.issue || '';

  const handleToggleStatus = (e) => {
    // Prevent dragging from triggering status change
    e.stopPropagation(); 
    
    let nextStatus = 'default';
    if (status === 'default') nextStatus = 'pass';
    else if (status === 'pass') nextStatus = 'fail';
    else nextStatus = 'default';

    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === id) {
          return { ...node, data: { ...node.data, status: nextStatus } };
        }
        return node;
      })
    );
  };

  const handleIssueChange = (e) => {
    const newIssue = e.target.value;
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === id) {
          return { ...node, data: { ...node.data, issue: newIssue } };
        }
        return node;
      })
    );
  };

  const containerClasses = twMerge(
    'min-w-[200px] rounded-xl border-3 shadow-xl transition-all duration-300 bg-white p-4',
    status === 'default' && 'border-gray-200 hover:border-blue-400',
    status === 'pass' && 'border-green-500 bg-green-50',
    status === 'fail' && 'border-red-500 bg-red-50'
  );

  return (
    <div className={containerClasses}>
      {/* Handles */}
      <Handle type="target" position={Position.Top} className="w-3 h-3 !bg-gray-400" />
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-gray-400" />
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-gray-400" />
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 !bg-gray-400" />

      {/* Header / Content */}
      <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={handleToggleStatus}>
        <span className="font-bold text-gray-800 text-lg select-none">{data.label}</span>
        <div className="ml-4">
            {status === 'default' && <Circle className="text-gray-300" />}
            {status === 'pass' && <CheckCircle className="text-green-600" />}
            {status === 'fail' && <AlertCircle className="text-red-600" />}
        </div>
      </div>

      {/* Fail Issue Input */}
      {status === 'fail' && (
        <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <textarea
            className="w-full text-sm p-2 rounded border border-red-300 bg-white/50 focus:outline-none focus:border-red-500"
            placeholder="Describe the issue..."
            rows={2}
            value={issue}
            onChange={handleIssueChange}
            onClick={(e) => e.stopPropagation()} // Prevent toggle when clicking textarea
          />
        </div>
      )}
    </div>
  );
};

export default memo(CustomNode);
