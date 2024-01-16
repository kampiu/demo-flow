import NodeJ from "./NodeJ"
import FlowManager from "../../FlowManager"
import { Flow } from "../../types"
import { ComponentType } from "react"


/** 节点注册方法 */
export const install = () => {
	FlowManager.registerNode({
		type: Flow.NodeType.NodeJ,
		title: "NodeJ",
		component: NodeJ as ComponentType<any>
	})
}

export type { NodeCInstance } from "./NodeJ"
export default NodeJ
