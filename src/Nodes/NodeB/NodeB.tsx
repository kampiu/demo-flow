import React, { forwardRef, useCallback, useImperativeHandle } from "react"
import styles from "../NodeA/NodeA.module.less"
import { Handle, Position, useStore } from "reactflow"
import type { NodeProps } from "@reactflow/core/dist/esm/types/nodes"
import Icons from "../../components/Icons"
import { useImmer } from "use-immer"
import hotkeys from "hotkeys-js"
import clsx from "clsx"

interface NodeBProps extends NodeProps {
	isMenu?: boolean
}

export interface NodeBInstance {

}

const NodeB = forwardRef<NodeBInstance, NodeBProps>((props, ref) => {
	
	const {isMenu, isConnectable} = props
	
	const connectionNodeId = useStore((store) => store.connectionNodeId)
	
	const [nodeStatus, setNodeStatus] = useImmer({
		canConnect: false,
	})
	
	useImperativeHandle(ref, (): NodeBInstance => {
		return {}
	})
	
	const onMouseEnter = useCallback(() => {
		if (!isMenu) {
			hotkeys("l", {keyup: true}, (event) => {
				event.preventDefault()
				setNodeStatus((preNodeStatus) => {
					preNodeStatus.canConnect = event.type === "keydown"
				})
			})
		}
	}, [isMenu])
	
	return (
		<div
			onMouseEnter={ onMouseEnter }
			className={ clsx(styles.node, {
				[styles.nodeConnect]: nodeStatus.canConnect,
			}) }
		>
			{
				!isMenu && (
					<>
						<Handle
							type="source"
							className={ styles.nodeHandle }
							style={ {
								zIndex: connectionNodeId === null && nodeStatus.canConnect ? 100 : -1,
							} }
							position={ Position.Top }
							isConnectable={ isConnectable }
						/>
						<Handle
							type="target"
							className={ styles.nodeHandle }
							style={ {
								zIndex: (!props.id && connectionNodeId !== props.id) ? 100 : -1
							} }
							position={ Position.Top }
							isConnectable={ isConnectable }
						/>
						<span className={ styles.nodeText }>NodeB</span>
					</>
				)
			}
			<div className={ styles.nodeWrapper }>
				<Icons.ReverseOperationOut/>
			</div>
		</div>
	)
})

export default NodeB
