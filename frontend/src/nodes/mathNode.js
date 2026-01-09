import React from 'react';
import BaseNode from './BaseNode';

export const MathNode = ({ data }) => (
  <BaseNode
    data={{
      ...data,
      label: 'MATH',
      className: 'math-node',
      content: (
        <div>
          <div className="mb-2">
            <label className="block text-xs text-gray-600 mb-1">Formula</label>
            <input
              type="text"
              defaultValue="a + b"
              className="w-full p-1 text-xs border rounded focus:ring-1 focus:ring-blue-500"
              placeholder="e.g., a + b, x * y"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Inputs</label>
            <input
              type="text"
              defaultValue="a, b"
              className="w-full p-1 text-xs border rounded focus:ring-1 focus:ring-blue-500"
              placeholder="comma-separated variables"
            />
          </div>
        </div>
      ),
      handles: [
        { id: 'input1', type: 'target', position: 'left' },
        { id: 'input2', type: 'target', position: 'left' },
        { id: 'result', type: 'source', position: 'right' }
      ]
    }}
    type="math" 
  />
);