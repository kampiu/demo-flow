import { useCallback } from 'react';
import type { ChangeEvent } from "react"
import { Handle, Position } from 'reactflow';
import styles from "./CustomNode.module.less"

const handleStyle = { left: 10 };

function CustomNode({ data, isConnectable }: any) {
	const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
		console.log(evt.target.value);
	}, []);
	
	return (
		<div className={styles.customNode}>
			<Handle type="target" position={Position.Top} isConnectable={isConnectable} />
			<div>
				<label className={styles.customNodeLabel} htmlFor="text">Text:</label>
				<input id="text" name="text" onChange={onChange} className="nodrag" />
			</div>
			<Handle
				type="source"
				position={Position.Bottom}
				id="a"
				style={handleStyle}
				isConnectable={isConnectable}
			/>
			<Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
		</div>
	);
}

export default CustomNode;
