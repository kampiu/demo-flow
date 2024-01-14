import React, { forwardRef, useImperativeHandle } from "react"
import styles from "./NodeA.module.less"
import { Handle, Position } from "reactflow"
import type { NodeProps } from "@reactflow/core/dist/esm/types/nodes"

interface NodeAProps extends NodeProps {
	isMenu?: boolean
}

export interface NodeAInstance {

}

const NodeA = forwardRef<NodeAInstance, NodeAProps>((props, ref) => {
	
	const { isMenu, isConnectable } = props

	useImperativeHandle(ref, (): NodeAInstance => {
		return {}
	})
	
	return (
		<div className={ styles.node }>
			{
				!isMenu && (
					<>
						<Handle
							type="source"
							position={ Position.Left }
							isConnectable={ isConnectable }
						/>
						<Handle
							type="source"
							position={ Position.Right }
							isConnectable={ isConnectable }
						/>
					</>
				)
			}
		</div>
	)
})

export default NodeA
