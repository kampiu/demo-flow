import React, { forwardRef, useImperativeHandle } from "react"
import styles from "./NodeC.module.less"
import { Handle, Position } from "reactflow"
import type { NodeProps } from "@reactflow/core/dist/esm/types/nodes"
import { useFlowDataSelector } from "@/context/FlowData"
import Icons from "@/components/Icons"

interface NodeCProps extends NodeProps {
	isMenu?: boolean
}

export interface NodeCInstance {

}

const NodeC = forwardRef<NodeCInstance, NodeCProps>((props, ref) => {
	
	const { isMenu, isConnectable } = props
	
	const activeNode = useFlowDataSelector((store) => store.activeNode)
	
	useImperativeHandle(ref, (): NodeCInstance => {
		return {}
	})
	
	return (
		<div className={ styles.node }>
			<div className={ styles.nodeWrapper }>
				<Icons.ReverseOperationIn/>
			</div>
			{
				!isMenu && (
					<>
						<Handle
							type="source"
							className={ styles.nodeHandle }
							style={ {
								zIndex: activeNode === null ? 100 : -1,
							} }
							position={ Position.Top }
							isConnectable={ isConnectable }
						/>
						<Handle
							type="target"
							className={ styles.nodeHandle }
							style={ {
								zIndex: (!props.id && activeNode !== props.id) ? 100 : -1
							} }
							position={ Position.Top }
							isConnectable={ isConnectable }
						/>
						<span className={ styles.nodeText }>NodeC</span>
					</>
				)
			}
		</div>
	)
})

export default NodeC
