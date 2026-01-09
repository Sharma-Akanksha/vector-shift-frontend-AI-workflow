import React from 'react';
import BaseNode from './BaseNode';

export const InputNode = ({ data }) => (
  <BaseNode
    data={{
      ...data,
      label: 'INPUT',
      className: 'input-node',
      content: (
        <div>
          <div className="mb-2">
            <label className="block text-xs text-gray-600 mb-1">Field Name</label>
            <input
              type="text"
              defaultValue="input"
              className="w-full p-1 text-xs border rounded focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Type</label>
            <select className="w-full p-1 text-xs border rounded focus:ring-1 focus:ring-blue-500">
              <option>Text</option>
              <option>Number</option>
              <option>Boolean</option>
            </select>
          </div>
        </div>
      ),
      handles: [{ id: 'output', type: 'source', position: 'right' }]
    }}
    type="customInput" 
  />
);