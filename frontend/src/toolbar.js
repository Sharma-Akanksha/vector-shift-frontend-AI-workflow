// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />

                {/* Add these 5 new nodes */}
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='condition' label='Condition' />
                <DraggableNode type='csv' label='CSV' />
                <DraggableNode type='custom' label='Custom' />
            </div>
        </div>
    );
};
