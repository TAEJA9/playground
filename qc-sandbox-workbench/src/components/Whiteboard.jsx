import React, { useCallback, useRef } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'custom',
    position: { x: 250, y: 100 },
    data: { label: 'Start Session' },
  },
];

const Whiteboard = ({ onNodesChange: onNodesChangeProp }) => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Propagate nodes change to parent for Dashboard
  React.useEffect(() => {
    if (onNodesChangeProp) {
        onNodesChangeProp(nodes);
    }
  }, [nodes, onNodesChangeProp]);

  // Handle Drag over to allow drop (placeholder for integration)
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  // Expose setNodes to parent if needed via context or imperative handle, 
  // but for now we might handle "Add Node" by passing a prop or using a shared context?
  // Actually, we'll keep state here and lift it up or expose a method if needed.
  // Better yet, we can use `useReactFlow` in a wrapper or parent.
  // For the specific requirement "Clicking a component ... generates a node",
  // we need a way to add nodes from outside.
  // We can wrap this component in a Provider and use useReactFlow in the Sidebar, 
  // OR pass a ref/callback. 
  // Let's assume the parent Layout/App will manage the interactions or we use a global store.
  // For simplicity given the scope: We can use a custom event or context.
  // Let's use the `window` event for "add-node" for loosely coupled simplicity if we don't want a complex store,
  // OR better, pass `addNode` function to context.
  
  // Actually, `ReactFlowProvider` allows accessing the instance.
  // We will place `ReactFlowProvider` up in the tree (in App.jsx or Layout).
  
  return (
    <div className="w-full h-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background color="#cbd5e1" gap={20} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Whiteboard;
