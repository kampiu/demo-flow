import { useCallback } from "react"
import { useStore, getBezierPath } from "reactflow"

import { getEdgeParams } from "./utils.js"
import type { EdgeProps } from "@reactflow/core"

function FloatingEdge({id, source, target, markerEnd, style}: EdgeProps) {
	const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]))
	const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]))
	
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
	
	console.log("- fill -", edgePath, sourceNode, targetNode)
	return (
		<g>
			<path
				fill="none"
				stroke="red"
				id={ id }
				className="react-flow__edge-path"
				d={ edgePath }
				markerEnd={ markerEnd }
				style={ style }
			/>
		</g>
	)
}

export default FloatingEdge
