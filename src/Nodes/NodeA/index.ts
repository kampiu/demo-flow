import NodeA from "./NodeA"
import FlowManager from "../../FlowManager"
import { Flow } from "../../types"
import generateContextMenu from "./generateContextMenu"
import { ComponentType } from "react"

/**
 * 节点链接规则
 * 1. 根据类型，单个类型作为一个条件。
 * 2. 根据链接数量：可区分针对所有已链接的数量，或单一类型的饿链接数量。
 * 3. 根据节点配置：节点数据配置中的某个字段作为条件，可触发链接哪些类型的节点，或对应节点类型的数量。
 * 4. 根据节点输出/输入：约束当前节点的输出，至于输入由source节点负责。
 */

/** 节点注册方法 */
export const install = () => {
	FlowManager.registerNode({
		type: Flow.NodeType.NodeA,
		title: "NodeA",
		component: NodeA as ComponentType,
		generateContextMenu,
		rules: [
			{
				nodeType: "NodeB"
			}
		]
	})
}

export type { NodeAInstance } from "./NodeA"
export default NodeA
