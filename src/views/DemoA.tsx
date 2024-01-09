import React, { useCallback, useRef, useState } from "react"
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
import EdgeA from "./Edges/EdgeA"
import clsx from "clsx"
import type { ReactFlowInstance } from "@reactflow/core/dist/esm/types/instance"

const initialNodes = [
	{id: "1", position: {x: 0, y: 0}, data: {label: "1"}},
	{id: "2", position: {x: 0, y: 100}, data: {label: "2"}},
	{id: "3", position: {x: 200, y: 200}, data: {label: "2"}, type: "customNode"},
	{id: "4", position: {x: 300, y: 500}, data: {label: "2"}, type: "nodeA"},
	{id: "5", position: {x: 700, y: 500}, data: {label: "2"}, type: "nodeA"},
]
const initialEdges = [
	{id: "1->2", source: "1", target: "2", type: "edgeA"},
	{id: "e1-3", source: "a-2", target: "2"}
]

const nodeTypes = {customNode: CustomNode, nodeA: NodeA}
const edgeTypes = {
	"edgeA": EdgeA,
}

function DemoA() {
	const reactFlowWrapper = useRef<HTMLDivElement>({} as HTMLDivElement)
	
	const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>(null)
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
	
	const onConnect = useCallback(
		(connection: Connection) => {
			console.log("____", connection)
			setEdges((eds) => addEdge(connection, eds))
		},
		[setEdges],
	)
	
	const onDragStart = useCallback((evt: React.DragEvent, nodeType: string) => {
		// 记录被拖拽的节点类型
		evt.dataTransfer.setData("application/reactflow", nodeType)
		evt.dataTransfer.effectAllowed = "move"
	}, [])
	
	const onDragOver = useCallback((event: any) => {
		event.preventDefault()
		event.dataTransfer.dropEffect = "move"
	}, [])
	
	const onDrop = useCallback((event: React.DragEvent) => {
		event.preventDefault()
		const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
		const type = event?.dataTransfer.getData("application/reactflow")
		
		if (typeof type === "undefined" || !type) {
			return
		}
		const position = reactFlowInstance.project({
			x: event.clientX - reactFlowBounds.left,
			y: event.clientY - reactFlowBounds.top,
		})
		let newNode = {
			id: "aaaaaaa",
			type: type,
			position,
			data: {label: `${ type } node`},
		}
		setNodes((es) => es.concat(newNode))
	}, [])
	
	return (
		<div className={ styles.layout }>
			<div className={ styles.layoutSideMenu }>
				
				{
					["AAA", "BBB", "CCC"].map(item => (
						<div className={ clsx(styles.item, "dndnode", "input") } key={ item }
						     onDragStart={ (event) => onDragStart(event, "input") } draggable>
							{ item }
						</div>
					))
				}
			</div>
			<div ref={ reactFlowWrapper } className={styles.layoutWrapper}>
				<ReactFlow
					nodes={ nodes }
					edges={ edges }
					onNodesChange={ onNodesChange }
					onEdgesChange={ onEdgesChange }
					onDrop={ onDrop }
					onInit={ setReactFlowInstance }
					onDragOver={ onDragOver }
					onConnect={ onConnect }
					nodeTypes={ nodeTypes }
					edgeTypes={ edgeTypes }
				>
					<Controls/>
					<MiniMap/>
					<Background variant="dots" gap={ 12 } size={ 1 }/>
				</ReactFlow>
			</div>
		</div>
	)
}

export default DemoA
