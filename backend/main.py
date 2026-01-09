from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # Add this import
from pydantic import BaseModel
from typing import List, Dict, Any
import networkx as nx

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (for development only)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

class PipelineRequest(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.post("/pipelines/parse")
def parse_pipeline(data: PipelineRequest):
    G = nx.DiGraph()
    for node in data.nodes:
        G.add_node(node["id"])
    for edge in data.edges:
        G.add_edge(edge["source"], edge["target"])
    
    return {
        "num_nodes": len(data.nodes),
        "num_edges": len(data.edges),
        "is_dag": nx.is_directed_acyclic_graph(G)
    }