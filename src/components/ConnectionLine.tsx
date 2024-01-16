import React from 'react';
import { useStore } from 'reactflow';
import { ConnectionLineComponentProps } from "@reactflow/core"

export default ({ fromX, fromY, toX, toY }: ConnectionLineComponentProps) => {
	const { connectionHandleId } = useStore(store => store);
	
	return (
		<g>
			<path
				fill="none"
				stroke="red"
				strokeWidth={ 1.5 }
				className="animated"
				d={ `M${ fromX },${ fromY } C ${ fromX } ${ toY } ${ fromX } ${ toY } ${ toX },${ toY }` }
			/>
			<circle
				cx={ toX }
				cy={ toY }
				fill="#fff"
				r={ 3 }
				stroke="red"
				strokeWidth={1.5}
			/>
		</g>
	);
};
