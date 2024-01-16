import React, { useCallback, useMemo, useRef, useState, memo, useEffect } from "react"
import ReactFlow, {
	MiniMap,
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	addEdge,
	ReactFlowProvider,
	useNodes,
	useStore,
	useReactFlow,
	useOnSelectionChange, Position,
} from "reactflow"
import styles from "./DemoA.module.less"
import CustomNode from "./components/CustomNode"
import { Connection } from "@reactflow/core/dist/esm/types/general"
import NodeA from "./Nodes/NodeA"
import EdgeA from "./Edges/EdgeA"
import clsx from "clsx"
import type { ReactFlowInstance } from "@reactflow/core/dist/esm/types/instance"
import { randomString } from "@/helper"
import FlowManager from "@/FlowManager"
import { Flow } from "@/types"
import FlowDataProvider from "../context/FlowData"
import useSetActiveNode from "../hooks/useSetActiveNode"
import { ConnectionLineType } from "@reactflow/core"

const initialNodes = [
	{id: "1", position: {x: 0, y: 0}, data: {label: "1"}},
	{id: "2", position: {x: 0, y: 100}, data: {label: "2"}},
	{id: "3", position: {x: 200, y: 200}, data: {label: "2"}, type: "customNode"},
	{id: "4", position: {x: 300, y: 500}, data: {label: "2"}, type: "nodeA"},
	{id: "5", position: {x: 700, y: 500}, data: {label: "2"}, type: "NodeB"},
]
const initialEdges = [
	{id: "1->2", source: "1", target: "2", type: "edgeA"},
	{id: "e1-3", source: "a-2", target: "2"}
]

// const nodeTypes = {customNode: CustomNode, nodeA: NodeA, ...FlowManager.nodes}
const edgeTypes = {
	"edgeA": EdgeA,
}

function DemoA() {
	const store = useStore((store) => store)
	const {connectionNodeId, transform} = store
	const setActiveNode = useSetActiveNode()
	
	const [,,zoom] = transform
	
	const nodeTypes = useMemo(() => {
		const n = FlowManager.getAllNodes().reduce((result, item) => {
			result[item.type] = item.component
			return result
		}, {} as Record<Flow.NodeType | string, React.ComponentType>)
		return {customNode: CustomNode, nodeA: NodeA, ...n}
	}, [])
	const reactFlowWrapper = useRef<HTMLDivElement>({} as HTMLDivElement)
	
	useEffect(() => {
		setActiveNode(connectionNodeId)
	}, [connectionNodeId])
	
	const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>({} as ReactFlowInstance)
	const [nodes, setNodes, onNodesChange] = useNodesState([])
	const [edges, setEdges, onEdgesChange] = useEdgesState([])
	
	const targetCache = useRef({x: 0, y: 0, width: 0,height: 0})
	
	const onConnect = useCallback(
		(connection: Connection) => {
			// 通过connection处理两个节点的handle方向
			const sourcePosition = document.querySelector(`[data-id="${ connection.source }"]`)?.getBoundingClientRect()
			const targetPosition = document.querySelector(`[data-id="${ connection.target }"]`)?.getBoundingClientRect()
			
			// connection.sourceHandle = `source_${Position.Right}`
			// connection.targetHandle = `target_${Position.Top}`
			connection.type = "edgeA"
			console.log("---", connection, sourcePosition?.left, targetPosition?.left)
			setEdges((eds) => addEdge(connection, eds))
		},
		[setEdges],
	)
	
	const onDragStart = useCallback((evt: React.DragEvent, nodeType: string) => {
		// 记录被拖拽的节点类型
		evt.dataTransfer.setData("application/reactflow", nodeType)
		evt.dataTransfer.effectAllowed = "move"
		
		const { width, height } = (evt.target as HTMLDivElement).getBoundingClientRect()
		// 对比拖拽目标的鼠标所在位置，计算拖抓后目标所落画布位置，1:1还原
		// @ts-ignore
		const position = evt.target?.getBoundingClientRect()
		targetCache.current = {
			x: (evt.clientX - position.left) / width,
			y: (evt.clientY - position.top) / height,
			width: position.width,
			height: position.height,
		}
		console.log("____", evt, nodeType, targetCache.current)
	}, [])
	
	const onDragOver = useCallback((event: React.DragEvent) => {
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
		// 磨平视图区对整体可视区的x、y差异
		const clientX = event.clientX- 204
		const {clientY} = event
		
		console.log("- end -",  clientX, clientY, reactFlowBounds, targetCache.current, zoom, event)
		const position = reactFlowInstance?.project({
			x: clientX - (targetCache.current.width * targetCache.current.x) * zoom,
			y: clientY - (targetCache.current.height * targetCache.current.y) * zoom,
		})
		if (position) {
			let newNode = {
				id: randomString(12),
				type: type,
				position,
				data: {label: `${ type } node`},
			}
			setNodes((es) => es.concat(newNode))
		}
	}, [reactFlowInstance, zoom])
	
	const nodesComponent = useMemo(() => {
		return FlowManager.getAllNodes()
	}, [])
	
	const isValidConnection = useCallback((connection: Connection): boolean => {
		return !!(connection.source && connection.target && connection.source !== connection.target)
		
	}, [])
	
	return (
		<div className={ styles.layout }>
			<div className={ styles.layoutSideMenu }>
				<div className={ styles.layoutSideMenuWrapper }>
					{
						nodesComponent.map(node => {
							const NodeItem = node.component
							return (
								<div className={ clsx(styles.item) } key={ node.type }>
									<div className={ styles.itemIcon }
									     onDragStart={ (event) => onDragStart(event, node.type) } draggable>
										<NodeItem isMenu/>
									</div>
									<span className={ styles.itemText }>
										{ node.title }
									</span>
								</div>
							)
						})
					}
				</div>
			</div>
			<div ref={ reactFlowWrapper } className={ styles.layoutWrapper }>
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
					connectionRadius={6}
					isValidConnection={isValidConnection}
					connectionLineType={ ConnectionLineType.Straight }
				>
					<Controls/>
					<MiniMap/>
					<Background gap={ 12 } size={ 1 }/>
				</ReactFlow>
			</div>
		</div>
	)
}

export default memo(() => {
	return (
		<FlowDataProvider>
			<ReactFlowProvider>
				<DemoA/>
			</ReactFlowProvider>
		</FlowDataProvider>
	)
})
