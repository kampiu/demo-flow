import React, { forwardRef, useImperativeHandle } from "react"
import styles from "./NodeC.module.less"

interface NodeCProps {

}

export interface NodeCInstance {

}

const NodeC = forwardRef<NodeCInstance, NodeCProps>((props, ref) => {
	
	useImperativeHandle(ref, (): NodeCInstance => {
		return {}
	})
	
	return (
		<div className={ styles.node }>
			NodeC
		</div>
	)
})

export default NodeC
