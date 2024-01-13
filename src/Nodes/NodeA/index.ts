import NodeA from "./NodeA"
import FlowManager from "../../FlowManager"
import { Flow } from "../../types"


/** 节点注册方法 */
export const install = () => {
	FlowManager.registerNode({
		type: Flow.NodeType.NodeA,
		title: "NodeA",
		component: NodeA
	})
}

export type { NodeAInstance } from "./NodeA"
export default NodeA
