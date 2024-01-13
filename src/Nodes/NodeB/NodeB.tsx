import React, { forwardRef, useImperativeHandle } from "react"
import styles from "./NodeB.module.less"

interface NodeBProps {

}

export interface NodeBInstance {

}

const NodeB = forwardRef<NodeBInstance, NodeBProps>((props, ref) => {
	
	useImperativeHandle(ref, (): NodeBInstance => {
		return {}
	})
	
	return (
		<div className={ styles.node }>
			NodeB
		</div>
	)
})

export default NodeB
