import React from 'react';
import BaseNode from './BaseNode';

export const CustomNode = ({ data }) => (
  <BaseNode
    data={{
      ...data,
      label: 'CUSTOM LOGIC',
      className: 'custom-node',
      content: (
        <div>
          <div className="mb-2">
            <label className="block text-xs text-gray-600 mb-1">Function Name</label>
            <input
              type="text"
              defaultValue="myFunction"
              className="w-full p-1 text-xs border rounded focus:ring-1 focus:ring-blue-500"
              placeholder="Custom function name"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Language</label>
            <select className="w-full p-1 text-xs border rounded focus:ring-1 focus:ring-blue-500">
              <option>JavaScript</option>
              <option>Python</option>
              <option>SQL</option>
            </select>
          </div>
        </div>
      ),
      handles: [
        { id: 'input', type: 'target', position: 'left' },
        { id: 'output', type: 'source', position: 'right' }
      ]
    }}
    type="custom" 
  />
);