import React, { forwardRef, useEffect, useImperativeHandle } from "react"
import styles from "./NodeA.module.less"
import { Handle, Position } from "reactflow"
import type { NodeProps } from "@reactflow/core/dist/esm/types/nodes"
import { useFlowDataSelector } from "@/context/FlowData"

interface NodeAProps extends NodeProps {
	isMenu?: boolean
}

export interface NodeAInstance {

}

const position = [Position.Top, Position.Left, Position.Right, Position.Bottom]

const NodeA = forwardRef<NodeAInstance, NodeAProps>((props, ref) => {
	
	const { isMenu, isConnectable } = props
	
	const activeNode = useFlowDataSelector((store) => store.activeNode)

	useEffect(() => {
	}, [activeNode])
	useImperativeHandle(ref, (): NodeAInstance => {
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
									key={i}
									type="source"
									className={styles.nodeHandle}
									style={{
										zIndex: activeNode === null ? 100 : -1,
									}}
									position={ i }
									isConnectable={ isConnectable }
								/>
							))
						}
						{
							position.map(i => (
								<Handle
									key={i}
									type="target"
									className={styles.nodeHandle}
									style={{
										zIndex: (!props.id && activeNode !== props.id) ? 100 : -1
									}}
									position={ i }
									isConnectable={ isConnectable }
								/>
							))
						}
						<span className={ styles.nodeText }>NodeA</span>
					</>
				)
			}
		</div>
	)
})

export default NodeA
