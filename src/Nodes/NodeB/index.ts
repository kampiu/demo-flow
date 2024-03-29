import NodeB from "./NodeB"
import FlowManager from "../../FlowManager"
import { Flow } from "../../types"
import { ComponentType } from "react"

/** 节点注册方法 */
export const install = () => {
	FlowManager.registerNode({
		type: Flow.NodeType.NodeB,
		title: "NodeB",
		component: NodeB as ComponentType<any>
	})
}

export type { NodeBInstance } from "./NodeB"
export default NodeB
