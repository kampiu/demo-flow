import NodeH from "./NodeH"
import FlowManager from "../../FlowManager"
import { Flow } from "../../types"
import { ComponentType } from "react"


/** 节点注册方法 */
export const install = () => {
	FlowManager.registerNode({
		type: Flow.NodeType.NodeH,
		title: "NodeH",
		component: NodeH as ComponentType<any>
	})
}

export type { NodeHInstance } from "./NodeH"
export default NodeH
