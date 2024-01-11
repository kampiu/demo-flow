import React, { useEffect } from "react"
import {
	BaseEdge,
	EdgeLabelRenderer,
	getStraightPath,
	useReactFlow,
} from "reactflow"
import "reactflow/dist/style.css"
import type { EdgeProps } from "@reactflow/core/dist/esm/types"

export default function EdgeA(props: EdgeProps) {
	const {id, sourceX, sourceY, targetX, targetY, selected} = props
	const {setEdges} = useReactFlow()
	
	console.log("- props -", props)
	
	const [edgePath, labelX, labelY] = getStraightPath({
		sourceX,
		sourceY,
		targetX,
		targetY,
	})
	
	return (
		<>
			<BaseEdge
				id={ id }
				path={ edgePath }
			/>
			{
				selected && (
					<EdgeLabelRenderer>
						<button
							style={ {
								position: "absolute",
								transform: `translate(-50%, -50%) translate(${ labelX }px,${ labelY }px)`,
								pointerEvents: "all",
							} }
							onClick={ () => setEdges((edges) => edges.filter((e) => e.id !== id)) }
						>
							delete
						</button>
					</EdgeLabelRenderer>
				)
			}
		</>
	)
}
