import React from 'react';
import BaseNode from './BaseNode';

export const OutputNode = ({ data }) => (
  <BaseNode
    data={{
      ...data,
      label: 'OUTPUT',
      className: 'output-node',
      content: (
        <div>
          <div className="mb-2">
            <label className="block text-xs text-gray-600 mb-1">Field Name</label>
            <input
              type="text"
              defaultValue="output"
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
      handles: [{ id: 'input', type: 'target', position: 'left' }]
    }}
    type="customOutput" 
  />
);