import React, { forwardRef, useEffect, useImperativeHandle } from "react"
import styles from "./NodeA.module.less"
import { Handle, Position } from "reactflow"
import type { NodeProps } from "@reactflow/core/dist/esm/types/nodes"
import { useFlowDataSelector } from "@/context/FlowData"
import hotkeys from "hotkeys-js"
import withMenu from "../withMenu"

interface NodeAProps extends NodeProps {
	isMenu?: boolean
}

export interface NodeAInstance {

}

const NodeA = forwardRef<NodeAInstance, NodeAProps>((props, ref) => {
	
	const {isMenu, isConnectable} = props
	
	const activeNode = useFlowDataSelector((store) => store.activeNode)
	
	useImperativeHandle(ref, (): NodeAInstance => {
		return {}
	})
	
	useEffect(() => {
		if (!isMenu) {
			hotkeys("a", (event) => {
				console.log("--a--", event)
			})
		}
	}, [])
	
	return (
		<div className={ styles.node }>
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
						<span className={ styles.nodeText }>NodeA</span>
					</>
				)
			}
		</div>
	)
})

export default withMenu(NodeA)
