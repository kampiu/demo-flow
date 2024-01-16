import NodeD from "./NodeD"
import FlowManager from "../../FlowManager"
import { Flow } from "../../types"
import { ComponentType } from "react"


/** 节点注册方法 */
export const install = () => {
	FlowManager.registerNode({
		type: Flow.NodeType.NodeD,
		title: "NodeD",
		component: NodeD as ComponentType<any>
	})
}

export type { NodeCInstance } from "./NodeD"
export default NodeD
