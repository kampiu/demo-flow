import React, { forwardRef, useImperativeHandle } from "react"
import styles from "./NodeC.module.less"
import { Handle, Position } from "reactflow"
import type { NodeProps } from "@reactflow/core/dist/esm/types/nodes"

interface NodeCProps extends NodeProps {
	isMenu?: boolean
}

export interface NodeCInstance {

}

const NodeC = forwardRef<NodeCInstance, NodeCProps>((props, ref) => {
	
	const { isMenu, isConnectable } = props
	
	useImperativeHandle(ref, (): NodeCInstance => {
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

export default NodeC
