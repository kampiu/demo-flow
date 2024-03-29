import React, { forwardRef, useCallback, useImperativeHandle } from "react"
import styles from "./NodeA.module.less"
import { Handle, Position, useStore } from "reactflow"
import type { NodeProps } from "@reactflow/core/dist/esm/types/nodes"
import hotkeys from "hotkeys-js"
import withMenu from "../withMenu"
import clsx from "clsx"
import Icons from "../../components/Icons"
import { useImmer } from "use-immer"

interface NodeAProps extends NodeProps {
	isMenu?: boolean
}

export interface NodeAInstance {

}

const NodeA = forwardRef<NodeAInstance, NodeAProps>((props, ref) => {
	
	const {isMenu, isConnectable} = props
	
	const connectionNodeId = useStore((store) => store.connectionNodeId)
	
	const [nodeStatus, setNodeStatus] = useImmer({
		canConnect: false,
	})
	
	useImperativeHandle(ref, (): NodeAInstance => {
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
						<span className={ styles.nodeText }>
							NodeA
						</span>
					</>
				)
			}
			<div className={ styles.nodeWrapper }>
				<Icons.DataDisplay/>
			</div>
		</div>
	)
})

export default withMenu(NodeA)
