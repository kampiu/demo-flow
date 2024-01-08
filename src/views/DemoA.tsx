import React, { useCallback } from "react"
import ReactFlow, {
	MiniMap,
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	addEdge,
} from "reactflow"
import styles from "./DemoA.module.less"
import CustomNode from "./components/CustomNode"
import { Connection } from "@reactflow/core/dist/esm/types/general"
import NodeA from "./Nodes/NodeA"

const initialNodes = [
	{id: "1", position: {x: 0, y: 0}, data: {label: "1"}},
	{id: "2", position: {x: 0, y: 100}, data: {label: "2"}},
	{id: "3", position: {x: 200, y: 200}, data: {label: "2"}, type: "customNode"},
	{id: "4", position: {x: 300, y: 500}, data: {label: "2"}, type: "nodeA"},
]
const initialEdges = [{id: "e1-2", source: "1", target: "2"}]

const nodeTypes = { customNode: CustomNode, nodeA: NodeA };

function DemoA() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
	
	const onConnect = useCallback(
		(connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
		[setEdges],
	)
	
	return (
		<div className={ styles.layout }>
			<ReactFlow
				nodes={ nodes }
				edges={ edges }
				onNodesChange={ onNodesChange }
				onEdgesChange={ onEdgesChange }
				onConnect={ onConnect }
				nodeTypes={nodeTypes}
			>
				<Controls/>
				<MiniMap/>
				<Background variant="dots" gap={ 12 } size={ 1 }/>
			</ReactFlow>
		</div>
	)
}

export default DemoA
