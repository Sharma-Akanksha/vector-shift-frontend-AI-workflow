import React from 'react';
import BaseNode from './BaseNode';

export const ConditionNode = ({ data }) => (
  <BaseNode
    data={{
      ...data,
      label: 'CONDITION',
      className: 'condition-node',
      content: (
        <div>
          <div className="mb-2">
            <label className="block text-xs text-gray-600 mb-1">Condition</label>
            <input
              type="text"
              defaultValue="input > 10"
              className="w-full p-1 text-xs border rounded focus:ring-1 focus:ring-blue-500"
              placeholder="e.g., variable > 5"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Operator</label>
            <select className="w-full p-1 text-xs border rounded focus:ring-1 focus:ring-blue-500">
              <option>Greater Than</option>
              <option>Less Than</option>
              <option>Equals</option>
              <option>Contains</option>
            </select>
          </div>
        </div>
      ),
      handles: [
        { id: 'condition', type: 'target', position: 'left' },
        { id: 'true', type: 'source', position: 'right' },
        { id: 'false', type: 'source', position: 'bottom' }
      ]
    }}
    type="condition" 
  />
);