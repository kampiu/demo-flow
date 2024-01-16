import NodeC from "./NodeC"
import FlowManager from "../../FlowManager"
import { Flow } from "../../types"
import { ComponentType } from "react"


/** 节点注册方法 */
export const install = () => {
	FlowManager.registerNode({
		type: Flow.NodeType.NodeC,
		title: "NodeC",
		component: NodeC as ComponentType<any>
	})
}

export type { NodeCInstance } from "./NodeC"
export default NodeC
