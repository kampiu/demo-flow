import React from "react"
import { getBezierPath, getSimpleBezierPath } from "reactflow"

import { getEdgeParams } from "./utils"
import { ConnectionLineComponentProps } from "@reactflow/core"

function FloatingConnectionLine({
	                                toX,
	                                toY,
	                                fromPosition,
	                                toPosition,
	                                fromNode,
	                                connectionStatus
                                }: ConnectionLineComponentProps) {
	if (!fromNode) {
		return null
	}
	
	// 是否对目标链接节点存在有效链接
	const invalid = connectionStatus === "invalid"
	
	const targetNode = {
		id: "connection-target",
		width: 40,
		height: 40,
		position: {x: toX - 20, y: toY - 20},
		positionAbsolute: {x: toX - 20, y: toY - 20}
	}
	
	const {sx, sy} = getEdgeParams(fromNode, targetNode as any)
	// const [edgePath] = getBezierPath({
	// 	sourceX: sx,
	// 	sourceY: sy,
	// 	sourcePosition: fromPosition,
	// 	targetPosition: toPosition,
	// 	targetX: toX,
	// 	targetY: toY
	// })
	
	const [edgePath] = getSimpleBezierPath({
		sourceX: sx,
		sourceY: sy,
		sourcePosition: fromPosition,
		targetPosition: toPosition,
		targetX: toX,
		targetY: toY
	})
	
	const color = connectionStatus === "invalid" ? "red" : (connectionStatus === "valid" ? "green" : "rgba(107,112,117, 1)")
	
	return (
		<g>
			<path
				fill="none"
				stroke={ color }
				strokeWidth={ connectionStatus ? 2 : 1 }
				className="animated"
				d={ edgePath }
			/>
			<circle
				cx={ toX }
				cy={ toY }
				fill="#fff"
				r={ 3 }
				stroke={ color }
				strokeWidth={ 1.5 }
			/>
		</g>
	)
}

export default FloatingConnectionLine
