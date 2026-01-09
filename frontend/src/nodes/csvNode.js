import React from 'react';
import BaseNode from './BaseNode';

export const CSVNode = ({ data }) => (
  <BaseNode
    data={{
      ...data,
      label: 'CSV LOADER',
      className: 'csv-node',
      content: (
        <div>
          <div className="mb-2">
            <label className="block text-xs text-gray-600 mb-1">File Path</label>
            <input
              type="text"
              defaultValue="./data.csv"
              className="w-full p-1 text-xs border rounded focus:ring-1 focus:ring-blue-500"
              placeholder="Path to CSV file"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Columns</label>
            <input
              type="text"
              defaultValue="*"
              className="w-full p-1 text-xs border rounded focus:ring-1 focus:ring-blue-500"
              placeholder="Comma-separated column names (or *)"
            />
          </div>
        </div>
      ),
      handles: [
        { id: 'file', type: 'target', position: 'left' },
        { id: 'data', type: 'source', position: 'right' }
      ]
    }}
    type="csv" 
  />
);