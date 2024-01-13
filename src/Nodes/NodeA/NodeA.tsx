import React, { forwardRef, useImperativeHandle } from "react"
import styles from "./NodeA.module.less"

interface NodeAProps {

}

export interface NodeAInstance {

}

const NodeA = forwardRef<NodeAInstance, NodeAProps>((props, ref) => {
	
	useImperativeHandle(ref, (): NodeAInstance => {
		return {}
	})
	
	return (
		<div className={ styles.node }>
			NodeA
		</div>
	)
})

export default NodeA
