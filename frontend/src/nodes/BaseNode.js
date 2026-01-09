// frontend/src/nodes/BaseNode.jsx
import React from 'react';
import { Handle, Position } from 'reactflow'; // Import Position from reactflow

// Color mapping for each node type
const NODE_COLORS = {
  customInput: { header: '#0ea5e9', bg: '#f0f9ff' },
  llm: { header: '#8b5cf6', bg: '#f3e8ff' },
  customOutput: { header: '#ec4899', bg: '#fdf2f8' },
  text: { header: '#10b981', bg: '#f0fdf4' },
  math: { header: '#f59e0b', bg: '#fffbeb' },
  api: { header: '#3b82f6', bg: '#dbeafe' },
  condition: { header: '#ef4444', bg: '#fef2f2' },
  csv: { header: '#059669', bg: '#f0fdf4' },
  custom: { header: '#6b7280', bg: '#f3f4f6' },
};

const BaseNode = ({ id, data, type }) => {
  const { label, handles = [], content } = data; // Destructure handles from data
  const colors = NODE_COLORS[type] || NODE_COLORS.custom;

  return (
    <div
      style={{
        width: '220px',
        borderRadius: '8px',
        border: `1px solid ${colors.header}`,
        backgroundColor: colors.bg,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        fontFamily: 'Inter, sans-serif',
        position: 'relative', // Needed for absolute positioning if handles were positioned absolutely
      }}
    >
      <div
        style={{
          padding: '8px 12px',
          backgroundColor: colors.header,
          color: 'white',
          fontSize: '13px',
          fontWeight: 600,
          borderBottom: `1px solid ${colors.header}`,
        }}
      >
        {label || type}
      </div>
      <div style={{ padding: '10px 12px', fontSize: '13px', color: '#374151' }}>
        {content}
      </div>
      {/* Iterate through the handles array passed from the specific node component */}
      {handles.map((handle) => {
        // Convert the string position ('left', 'right') to the reactflow Position enum
        let positionEnum;
        if (handle.position === 'left') {
          positionEnum = Position.Left;
        } else if (handle.position === 'right') {
          positionEnum = Position.Right;
        } else if (handle.position === 'top') {
          positionEnum = Position.Top;
        } else if (handle.position === 'bottom') {
          positionEnum = Position.Bottom;
        } else {
          // Default or handle invalid positions - maybe log a warning?
          console.warn(`Invalid handle position: ${handle.position}. Defaulting to Left.`);
          positionEnum = Position.Left; // Or maybe Position.Right
        }

        // Determine background color based on handle type if not overridden
        const handleBackgroundColor = handle.style?.background || colors.header;

        return (
          <Handle
            key={handle.id} // Use handle ID as key for uniqueness
            type={handle.type} // 'target' or 'source' - crucial for connection direction
            position={positionEnum} // Use the converted Position enum
            id={handle.id}
            isConnectable={true} // The specific ID for the handle
            style={{
              // Apply styling
              background: handleBackgroundColor,
              border: handle.style?.border || '2px solid white',
              // Other styles can be applied here if needed
            }}
          />
        );
      })}
    </div>
  );
};

export default BaseNode;