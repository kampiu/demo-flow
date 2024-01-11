import React, { useEffect } from "react"
import {
	BaseEdge,
	EdgeLabelRenderer,
	getStraightPath,
	useReactFlow,
} from "reactflow"
import "reactflow/dist/style.css"

export default function EdgeA(props) {
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
				animated={ true }
				className="react-flow__edge-interaction"
				onMouseEnter={ () => console.log("enter edge") }
				onMouseLeave={ () => console.log("leave edge") }
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
