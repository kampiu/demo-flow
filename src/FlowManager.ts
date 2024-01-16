import type { ComponentType, ForwardRefExoticComponent, RefAttributes } from "react"
import { Flow } from "./types"
import { MenuProps } from "antd"

/** 节点类型，后续扩展 */
type NodeType = Flow.NodeType | string

/** 线段类型，后续扩展 */
type EdgeType = string

/** 节点链接规则 */
interface INodeRule {
	sourceNodeType: NodeType
	targetNodeType: NodeType
}

/** 线段类型 */
export interface IEdge {
	type: EdgeType
	title: string
}

/** 节点类型 */
export interface INode {
	type: NodeType
	title: string
	component: ComponentType
	/** 节点链接规则 */
	rules?: Array<INodeRule>
	/** 构建节点右击菜单 */
	generateContextMenu?: () => MenuProps["items"]
}

class FlowManager {
	
	private edges: Record<EdgeType, IEdge> = {}
	private nodes: Record<NodeType, INode> = {}
	
	registerNode(options: INode) {
		this.nodes[options.type] = options
	}
	
	registerEdge(options: IEdge) {
		this.edges[options.type] = options
	}
	
	getNode(nodeType: NodeType) {
		return this.nodes[nodeType]
	}
	
	getNodeConfig(nodeType: NodeType): INode {
		return this.nodes[nodeType]
	}
	
	getEdge(nodeType: NodeType) {
		return this.edges[nodeType]
	}
	
	getAllNodes(): Array<INode> {
		return Object.values(this.nodes)
	}
	
}

const manager = new FlowManager()

// @ts-ignore 调试
window.manager = manager

export default manager
