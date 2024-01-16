import NodeA from "./NodeA"
import FlowManager from "../../FlowManager"
import { Flow } from "../../types"
import generateContextMenu from "./generateContextMenu"
import { ComponentType } from "react"

/** 节点注册方法 */
export const install = () => {
	FlowManager.registerNode({
		type: Flow.NodeType.NodeA,
		title: "NodeA",
		component: NodeA as ComponentType,
		generateContextMenu,
		rules: [
			{
				sourceNodeType: "",
				targetNodeType: ""
			}
		]
	})
}

export type { NodeAInstance } from "./NodeA"
export default NodeA
