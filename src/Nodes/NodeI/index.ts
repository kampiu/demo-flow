import NodeI from "./NodeI"
import FlowManager from "../../FlowManager"
import { Flow } from "../../types"
import { ComponentType } from "react"


/** 节点注册方法 */
export const install = () => {
	FlowManager.registerNode({
		type: Flow.NodeType.NodeI,
		title: "NodeI",
		component: NodeI as ComponentType<any>
	})
}

export type { NodeCInstance } from "./NodeI"
export default NodeI
