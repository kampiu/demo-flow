import NodeF from "./NodeF"
import FlowManager from "../../FlowManager"
import { Flow } from "../../types"
import { ComponentType } from "react"


/** 节点注册方法 */
export const install = () => {
	FlowManager.registerNode({
		type: Flow.NodeType.NodeF,
		title: "NodeF",
		component: NodeF as ComponentType<any>
	})
}

export type { NodeCInstance } from "./NodeF"
export default NodeF
