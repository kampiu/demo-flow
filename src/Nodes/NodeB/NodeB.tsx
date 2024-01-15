import React, { forwardRef, useImperativeHandle } from "react"
import styles from "./NodeB.module.less"
import { Handle, Position } from "reactflow"
import type { NodeProps } from "@reactflow/core/dist/esm/types/nodes"
import { useFlowDataSelector } from "@/context/FlowData"
import { position } from "@/Nodes/NodeA/NodeA"

interface NodeBProps extends NodeProps {
	isMenu?: boolean
}

export interface NodeBInstance {

}

const NodeB = forwardRef<NodeBInstance, NodeBProps>((props, ref) => {
	
	const { isMenu, isConnectable } = props
	
	const activeNode = useFlowDataSelector((store) => store.activeNode)
	
	useImperativeHandle(ref, (): NodeBInstance => {
		return {}
	})
	
	return (
		<div className={ styles.node }>
			{
				!isMenu && (
					<>
						{
							position.map(i => (
								<Handle
									key={ `source_${i}` }
									type="source"
									className={ styles.nodeHandle }
									style={ {
										zIndex: activeNode === null ? 100 : -1,
									} }
									position={ i }
									isConnectable={ isConnectable }
								/>
							))
						}
						{
							position.map(i => (
								<Handle
									key={ `target_${i}` }
									type="target"
									className={ styles.nodeHandle }
									style={ {
										zIndex: (!props.id && activeNode !== props.id) ? 100 : -1
									} }
									position={ i }
									isConnectable={ isConnectable }
								/>
							))
						}
						<span className={ styles.nodeText }>NodeB</span>
					</>
				)
			}
		</div>
	)
})

export default NodeB
