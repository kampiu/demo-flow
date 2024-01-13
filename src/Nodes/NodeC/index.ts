import NodeC from "./NodeC"
import FlowManager from "../../FlowManager"
import { Flow } from "../../types"


/** 节点注册方法 */
export const install = () => {
	FlowManager.registerNode({
		type: Flow.NodeType.NodeC,
		title: "NodeC",
		component: NodeC
	})
}

export type { NodeCInstance } from "./NodeC"
export default NodeC
