import React, { useState } from 'react';
import { PipelineUI } from './ui';
import { PipelineToolbar } from './toolbar';
import { useStore } from './store';
import { submitPipeline } from './submit';

function App() {
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const { nodes, edges } = useStore.getState();
      const result = await submitPipeline(nodes, edges);
      setResult(result);
      setTimeout(() => setResult(null), 5000);
    } catch (error) {
      alert('Failed to validate pipeline. Is the backend running? Check console.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleSubmit}
        className="absolute top-4 right-4 px-4 py-2 bg-purple-600 text-white rounded z-10"
      >
        Submit Pipeline
      </button>

      {result && (
        <div className="absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg border-l-4 border-green-500 z-20">
          <div>Nodes: {result.num_nodes}</div>
          <div>Edges: {result.num_edges}</div>
          <div>DAG: {result.is_dag ? '✅ Yes' : '❌ No'}</div>
        </div>
      )}

      <PipelineToolbar />
      <PipelineUI />
    </div>
  );
}

export default App;