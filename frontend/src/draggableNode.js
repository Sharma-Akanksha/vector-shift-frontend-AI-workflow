import React from 'react';

// Color mapping for each node type
const NODE_COLORS = {
  customInput: { header: '#0ea5e9', bg: '#f0f9ff' }, // Blue
  llm: { header: '#8b5cf6', bg: '#f3e8ff' },         // Purple
  customOutput: { header: '#ec4899', bg: '#fdf2f8' }, // Pink
  text: { header: '#10b981', bg: '#f0fdf4' },         // Green
  math: { header: '#f59e0b', bg: '#fffbeb' },         // Amber
  api: { header: '#3b82f6', bg: '#dbeafe' },          // Light Blue
  condition: { header: '#ef4444', bg: '#fef2f2' },    // Red
  csv: { header: '#059669', bg: '#f0fdf4' },          // Emerald
  custom: { header: '#6b7280', bg: '#f3f4f6' },       // Gray
};

export const DraggableNode = ({ type, label }) => {
  const colors = NODE_COLORS[type] || NODE_COLORS.custom;

  const onDragStart = (event) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType: type }));
    event.dataTransfer.effectAllowed = 'move';
    event.target.style.cursor = 'grabbing';
  };

  const onDragEnd = (event) => {
    event.target.style.cursor = 'grab';
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        backgroundColor: colors.header,
        color: 'white',
        fontSize: '13px',
        fontWeight: 500,
        transition: 'all 0.2s ease',
        userSelect: 'none',
      }}
      className="hover:bg-opacity-80"
    >
      {label}
    </div>
  );
};