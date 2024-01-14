import React, { forwardRef, useImperativeHandle } from "react"
import styles from "./NodeB.module.less"
import { Handle, Position } from "reactflow"
import type { NodeProps } from "@reactflow/core/dist/esm/types/nodes"

interface NodeBProps extends NodeProps {
	isMenu?: boolean
}

export interface NodeBInstance {

}

const NodeB = forwardRef<NodeBInstance, NodeBProps>((props, ref) => {
	
	const { isMenu, isConnectable } = props
	
	useImperativeHandle(ref, (): NodeBInstance => {
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

export default NodeB
