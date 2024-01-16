import NodeG from "./NodeG"
import FlowManager from "../../FlowManager"
import { Flow } from "../../types"
import { ComponentType } from "react"


/** 节点注册方法 */
export const install = () => {
	FlowManager.registerNode({
		type: Flow.NodeType.NodeG,
		title: "NodeG",
		component: NodeG as ComponentType<any>
	})
}

export type { NodeCInstance } from "./NodeG"
export default NodeG
