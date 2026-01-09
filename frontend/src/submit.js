export const submitPipeline = async (nodes, edges) => {
  try {
    const response = await fetch('http://localhost:8000/pipelines/parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nodes, edges }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result; // { num_nodes, num_edges, is_dag }
  } catch (error) {
    console.error('Submission error:', error);
    throw error;
  }
};

