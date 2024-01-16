import React from "react"
import { getBezierPath } from "reactflow"

import { getEdgeParams } from "./utils"
import { ConnectionLineComponentProps } from "@reactflow/core"

function FloatingConnectionLine({toX, toY, fromPosition, toPosition, fromNode}: ConnectionLineComponentProps) {
	if (!fromNode) {
		return null
	}
	
	const targetNode = {
		id: "connection-target",
		width: 40,
		height: 40,
		position: {x: toX - 20, y: toY - 20},
		positionAbsolute: {x: toX - 20, y: toY - 20}
	}
	
	const {sx, sy} = getEdgeParams(fromNode, targetNode as any)
	const [edgePath] = getBezierPath({
		sourceX: sx,
		sourceY: sy,
		sourcePosition: fromPosition,
		targetPosition: toPosition,
		targetX: toX,
		targetY: toY
	})
	
	console.log("- hover -", edgePath, fromNode, targetNode)
	return (
		<g>
			<path
				fill="none"
				stroke="red"
				strokeWidth={ 1.5 }
				className="animated"
				d={ edgePath }
			/>
			<circle
				cx={ toX }
				cy={ toY }
				fill="#fff"
				r={ 3 }
				stroke="red"
				strokeWidth={ 1.5 }
			/>
		</g>
	)
}

export default FloatingConnectionLine
