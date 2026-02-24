import { useState, useCallback } from 'react';
import {
    ReactFlow,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    Background,
    MarkerType,
    Handle,
    Position,
    type Node,
    type Edge
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const nodeStyle = {
    background: '#222224',
    color: '#EDECED',
    padding: '16px 24px',
    borderRadius: '8px',
    border: '1px solid #3d3d40',
    width: 150,
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: 'system-ui, -apple-system, sans-serif'
};

const CustomNode = ({ data }: any) => {
    return (
        <div style={nodeStyle}>
            <Handle type="target" position={Position.Top} id="top-target" style={{ opacity: 0 }} />
            <Handle type="source" position={Position.Top} id="top-source" style={{ opacity: 0 }} />

            <Handle type="target" position={Position.Bottom} id="bottom-target" style={{ opacity: 0 }} />
            <Handle type="source" position={Position.Bottom} id="bottom-source" style={{ opacity: 0 }} />

            <Handle type="target" position={Position.Left} id="left-target" style={{ opacity: 0 }} />
            <Handle type="source" position={Position.Left} id="left-source" style={{ opacity: 0 }} />

            <Handle type="target" position={Position.Right} id="right-target" style={{ opacity: 0 }} />
            <Handle type="source" position={Position.Right} id="right-source" style={{ opacity: 0 }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <span style={{ textAlign: 'center' }}>{data.label}</span>
                {data.icons && (
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        {data.icons.map((icon: string) => (
                            <img key={icon} src={`https://cdn.simpleicons.org/${icon}`} alt={icon} width={20} height={20} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const nodeTypes = { custom: CustomNode };

const initialNodes: Node[] = [
    // DevOps (Left column, x: 50)
    { id: 'registry', type: 'custom', position: { x: 50, y: 50 }, data: { label: 'Registry' } },
    { id: 'watchtower', type: 'custom', position: { x: 50, y: 150 }, data: { label: 'Watchtower' } },
    { id: 'alloy', type: 'custom', position: { x: 50, y: 350 }, data: { label: 'Alloy' } },
    { id: 'loki', type: 'custom', position: { x: 50, y: 450 }, data: { label: 'Loki' } },
    { id: 'grafana', type: 'custom', position: { x: 50, y: 550 }, data: { label: 'Grafana' } },

    // App Mechanism (Middle column, x: 250)
    { id: 'frontend', type: 'custom', position: { x: 250, y: 150 }, data: { label: 'Frontend', icons: ['typescript', 'react', 'nginx', 'tailwindcss'] } },
    { id: 'backend', type: 'custom', position: { x: 250, y: 350 }, data: { label: 'Backend', icons: ['typescript', 'nestjs', 'prisma'] } },
    { id: 'postgres', type: 'custom', position: { x: 250, y: 450 }, data: { label: 'PostgreSQL' } },

    // User Facing (Right column, x: 450)
    { id: 'telegram', type: 'custom', position: { x: 450, y: 150 }, data: { label: 'Telegram Bot' } },
    { id: 'caddy', type: 'custom', position: { x: 450, y: 250 }, data: { label: 'Caddy' } },
    { id: 'directus', type: 'custom', position: { x: 450, y: 350 }, data: { label: 'Directus' } },
];

const edgeStyle = { stroke: '#8c8c8e', strokeWidth: 1.5 };
const arrowMarker = { type: MarkerType.ArrowClosed, color: '#8c8c8e' };
const reverseArrowMarker = { type: MarkerType.ArrowClosed, color: '#8c8c8e', orient: 'auto-start-reverse' };

const initialEdges: Edge[] = [
    // DevOps -> DevOps
    {
        id: 'e-reg-watch',
        source: 'registry', sourceHandle: 'bottom-source',
        target: 'watchtower', targetHandle: 'top-target',
        style: edgeStyle,
        markerEnd: arrowMarker,
    },
    {
        id: 'e-alloy-loki',
        source: 'alloy', sourceHandle: 'bottom-source',
        target: 'loki', targetHandle: 'top-target',
        style: edgeStyle,
        markerEnd: arrowMarker,
    },
    {
        id: 'e-loki-grafana',
        source: 'loki', sourceHandle: 'bottom-source',
        target: 'grafana', targetHandle: 'top-target',
        style: edgeStyle,
        markerEnd: arrowMarker,
    },

    // DevOps -> App
    {
        id: 'e-watch-front',
        source: 'watchtower', sourceHandle: 'right-source',
        target: 'frontend', targetHandle: 'left-target',
        style: { ...edgeStyle, strokeDasharray: '6 6' },
        markerEnd: arrowMarker,
    },
    {
        id: 'e-watch-nest',
        source: 'watchtower', sourceHandle: 'right-source',
        target: 'backend', targetHandle: 'left-target',
        style: { ...edgeStyle, strokeDasharray: '6 6' },
        markerEnd: arrowMarker,
        type: 'smoothstep',
    },

    // App Internals
    {
        id: 'e-front-nest',
        source: 'frontend', sourceHandle: 'bottom-source',
        target: 'backend', targetHandle: 'top-target',
        style: edgeStyle,
        markerStart: reverseArrowMarker,
        markerEnd: arrowMarker,
    },
    {
        id: 'e-nest-pg',
        source: 'backend', sourceHandle: 'bottom-source',
        target: 'postgres', targetHandle: 'top-target',
        style: edgeStyle,
        markerStart: reverseArrowMarker,
        markerEnd: arrowMarker,
    },

    // App -> DevOps
    {
        id: 'e-nest-alloy',
        source: 'backend', sourceHandle: 'left-source',
        target: 'alloy', targetHandle: 'right-target',
        style: edgeStyle,
        markerEnd: arrowMarker,
    },

    // User Facing -> App
    {
        id: 'e-caddy-front',
        source: 'caddy', sourceHandle: 'left-source',
        target: 'frontend', targetHandle: 'right-target',
        style: edgeStyle,
        markerEnd: arrowMarker,
        type: 'smoothstep',
    },
    {
        id: 'e-nest-directus',
        source: 'backend', sourceHandle: 'right-source',
        target: 'directus', targetHandle: 'left-target',
        style: edgeStyle,
        markerStart: reverseArrowMarker,
        markerEnd: arrowMarker,
    },
    {
        id: 'e-dir-pg',
        source: 'directus', sourceHandle: 'bottom-source',
        target: 'postgres', targetHandle: 'right-target',
        style: edgeStyle,
        markerStart: reverseArrowMarker,
        markerEnd: arrowMarker,
        type: 'smoothstep',
    },
    {
        id: 'e-nest-telegram',
        source: 'backend', sourceHandle: 'right-source',
        target: 'telegram', targetHandle: 'left-target',
        style: edgeStyle,
        markerStart: reverseArrowMarker,
        markerEnd: arrowMarker,
        type: 'smoothstep',
    },

    // User Facing Internal
    {
        id: 'e-caddy-telegram',
        source: 'caddy', sourceHandle: 'top-source',
        target: 'telegram', targetHandle: 'bottom-target',
        style: edgeStyle,
        markerStart: reverseArrowMarker,
        markerEnd: arrowMarker,
    }
];

export default function App() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );
    const onEdgesChange = useCallback(
        (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );
    const onConnect = useCallback(
        (params: any) => setEdges((eds) => addEdge(params, eds)),
        []
    );

    return (
        <div style={{ width: '100%', height: '100%', background: '#1c1c1e' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                colorMode="dark"
                fitView
            >
                <Background color="#3d3d40" gap={16} />
            </ReactFlow>
        </div>
    );
}