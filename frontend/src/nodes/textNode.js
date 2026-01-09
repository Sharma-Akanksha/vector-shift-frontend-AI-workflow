// frontend/src/nodes/textNode.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data.text || '');
  const textareaRef = useRef(null);

  // Auto-resize the textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.max(textareaRef.current.scrollHeight, 60) + 'px';
    }
  }, [text]);

  // Extract variables like {{input}}
  const variables = useMemo(() => {
    const matches = text.match(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g) || [];
    return [...new Set(matches.map(v => v.slice(2, -2).trim()))];
  }, [text]);

  // Generate handles from variables
  // IMPORTANT: Use 'left' and 'right' strings here, BaseNode will convert them to Position enums
  const handles = [
    ...variables.map(v => ({
      id: `var-${v}`,
      type: 'target', // This means it accepts incoming connections (input)
      position: 'left' // This should place it on the left side
    })),
    {
      id: 'output', // The standard output handle
      type: 'source', // This means it sends outgoing connections (output)
      position: 'right' // This should place it on the right side
    }
  ];

  return (
    <BaseNode
      data={{
        ...data,
        label: 'TEXT',
        className: 'text-node',
        content: (
          <div>
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-1 text-xs border rounded focus:ring-1 focus:ring-blue-500 resize-none"
              placeholder="Enter text... Use {{variable}} for inputs"
              style={{
                minHeight: '60px',
                overflow: 'hidden',
                height: 'auto'
              }}
            />
            {variables.length > 0 && (
              <div className="mt-2 text-xs text-gray-600">
                Variables: {variables.map(v => (
                  <span
                    key={v}
                    className="inline-block px-1 py-0.5 mx-0.5 text-xs bg-blue-100 text-blue-800 rounded"
                  >
                    {v}
                  </span>
                ))}
              </div>
            )}
          </div>
        ),
        handles // Pass the handles array here - This is crucial
      }}
      type="text" // Pass the type for BaseNode styling
    />
  );
};