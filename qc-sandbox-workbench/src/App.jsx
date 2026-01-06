import React, { useState } from 'react';
import { SessionProvider } from './context/SessionContext';
import Layout from './components/Layout';
import Whiteboard from './components/Whiteboard';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { ReactFlowProvider, useReactFlow } from 'reactflow';

// Wrapper to use useReactFlow
const AppContent = ({ onNodesChange, nodes }) => {
    const { setNodes } = useReactFlow();

    const handleAddNode = (label) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newNode = {
            id,
            type: 'custom',
            position: { x: 250 + Math.random() * 100, y: 100 + Math.random() * 100 },
            data: { label, status: 'default' },
        };
        setNodes((nds) => nds.concat(newNode));
    };

    const handleAddGroup = (labels) => {
        const newNodes = labels.map((label, index) => ({
            id: Math.random().toString(36).substr(2, 9),
            type: 'custom',
            position: { x: 250 + (index * 250), y: 100 },
            data: { label, status: 'default' },
        }));
        setNodes((nds) => nds.concat(newNodes));
    };

    return (
        <Layout>
            <div className="flex h-full">
                <Sidebar onAddNode={handleAddNode} onAddGroup={handleAddGroup} />
                <div className="flex-1 h-full relative">
                    <Whiteboard onNodesChange={onNodesChange} />
                </div>
            </div>
            <Dashboard nodes={nodes} />
        </Layout>
    );
};

function App() {
  const [nodes, setNodes] = useState([]);

  return (
    <SessionProvider>
       <ReactFlowProvider>
          <AppContent onNodesChange={setNodes} nodes={nodes} />
      </ReactFlowProvider>
    </SessionProvider>
  );
}

export default App;
