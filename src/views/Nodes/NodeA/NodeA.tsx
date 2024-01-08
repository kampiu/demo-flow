import { useCallback } from "react"
import type { ChangeEvent } from "react"
import { Handle, Position } from "reactflow"
import styles from "./NodeA.module.less"
import { Form, Input, Select, Col, Row } from "antd"

const handleStyle = {left: 10}

const options = [{value: "gold"}, {value: "lime"}, {value: "green"}, {value: "cyan"}]

function NodeA({data, isConnectable}: any) {
	const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
		console.log(evt.target.value)
	}, [])
	
	return (
		<div className={ styles.customNode }>
			<Handle type="target" position={ Position.Top } isConnectable={ isConnectable }/>
			<div>
				<Form layout="vertical">
					<Row>
						<Col>
							<Form.Item label="自定义属性" name="name">
								<Input placeholder="请填写自定义属性"/>
							</Form.Item>
						</Col>
						<Col>
							<Form.Item label="自定义属性" name="status">
								<Select
									placeholder="请填写自定义属性"
									defaultValue={'gold'}
								>
									{options.map(option => <Select.Option key={option.value} value={option.value}>{option.value}</Select.Option>)}
								</Select>
							</Form.Item>
						</Col>
						<Col>
							<Form.Item label="自定义属性" name="type">
								<Input placeholder="请填写自定义属性"/>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</div>
			<Handle
				type="source"
				position={ Position.Bottom }
				id="a"
				style={ handleStyle }
				isConnectable={ isConnectable }
			/>
			<Handle type="source" position={ Position.Bottom } id="b" isConnectable={ isConnectable }/>
		</div>
	)
}

export default NodeA
