import NodeE from "./NodeE"
import FlowManager from "../../FlowManager"
import { Flow } from "../../types"
import { ComponentType } from "react"


/** 节点注册方法 */
export const install = () => {
	FlowManager.registerNode({
		type: Flow.NodeType.NodeE,
		title: "NodeE",
		component: NodeE as ComponentType<any>
	})
}

export type { NodeCInstance } from "./NodeE"
export default NodeE
