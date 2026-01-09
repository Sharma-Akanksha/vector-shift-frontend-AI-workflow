import React from 'react';
import BaseNode from './BaseNode';

export const LLMNode = ({ data }) => (
  <BaseNode
    data={{
      ...data,
      label: 'LLM ENGINE',
      className: 'llm-node',
      content: (
        <div>
          <div className="mb-2">
            <label className="block text-xs text-gray-600 mb-1">Model</label>
            <select className="w-full p-1 text-xs border rounded focus:ring-1 focus:ring-blue-500">
              <option>GPT-4</option>
              <option>Claude-3</option>
              <option>Llama-3</option>
            </select>
          </div>
          <div className="text-xs text-gray-600">
            Processes input through Large Language Model inference engine.
          </div>
        </div>
      ),
      handles: [
        { id: 'input', type: 'target', position: 'left' },
        { id: 'output', type: 'source', position: 'right' }
      ]
    }}
    type="llm" 
  />
);