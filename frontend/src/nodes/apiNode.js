import React from 'react';
import BaseNode from './BaseNode';

export const APINode = ({ data }) => (
  <BaseNode
    data={{
      ...data,
      label: 'API CALL',
      className: 'api-node',
      content: (
        <div>
          <div className="mb-2">
            <label className="block text-xs text-gray-600 mb-1">URL</label>
            <input
              type="text"
              defaultValue="https://api.example.com/data"
              className="w-full p-1 text-xs border rounded focus:ring-1 focus:ring-blue-500"
              placeholder="Enter API endpoint"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Method</label>
            <select className="w-full p-1 text-xs border rounded focus:ring-1 focus:ring-blue-500">
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>
          </div>
        </div>
      ),
      handles: [
        { id: 'input', type: 'target', position: 'left' },
        { id: 'response', type: 'source', position: 'right' }
      ]
    }}
    type="api" 
  />
);