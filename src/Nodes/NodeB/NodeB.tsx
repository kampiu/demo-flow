import React, { forwardRef, useImperativeHandle } from "react"
import styles from "./NodeB.module.less"
import { Handle, Position } from "reactflow"
import type { NodeProps } from "@reactflow/core/dist/esm/types/nodes"
import { useFlowDataSelector } from "@/context/FlowData"
import Icons from "../../components/Icons"

interface NodeBProps extends NodeProps {
	isMenu?: boolean
}

export interface NodeBInstance {

}

const NodeB = forwardRef<NodeBInstance, NodeBProps>((props, ref) => {
	
	const {isMenu, isConnectable} = props
	
	const activeNode = useFlowDataSelector((store) => store.activeNode)
	
	useImperativeHandle(ref, (): NodeBInstance => {
		return {}
	})
	
	return (
		<div className={ styles.node }>
			<div className={styles.nodeWrapper}>
				<Icons.ReverseOperationOut />
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
						<span className={ styles.nodeText }>NodeB</span>
					</>
				)
			}
		</div>
	)
})

export default NodeB
