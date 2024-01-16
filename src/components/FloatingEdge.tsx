import { useCallback } from "react"
import { useStore, getBezierPath, getStraightPath } from "reactflow"

import { getEdgeParams } from "./utils.js"
import type { EdgeProps } from "@reactflow/core"

/**
 * 链接点段可根据source、target从数据层获取节点的数据，通过数据动态更改线段当前的状态、颜色、粗细等
 */


function FloatingEdge(props: EdgeProps) {
	const {id, source, target, markerEnd, style} = props
	const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]))
	const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]))
	
	console.log("-- props -->", props)
	if (!sourceNode || !targetNode) {
		return null
	}
	
	const {sx, sy, tx, ty, sourcePos, targetPos} = getEdgeParams(sourceNode, targetNode)
	
	const [edgePath] = getBezierPath({
		sourceX: sx,
		sourceY: sy,
		sourcePosition: sourcePos,
		targetPosition: targetPos,
		targetX: tx,
		targetY: ty,
	})
	
	return (
		<path
			fill="none"
			stroke="red"
			id={ id }
			d={ edgePath }
			markerEnd={ markerEnd }
			style={ style }
		/>
	)
}

export default FloatingEdge
