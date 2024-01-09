import type { ChangeEvent } from "react"
import { useCallback, useRef } from "react"
import { Handle, Position } from "reactflow"
import styles from "./NodeA.module.less"
import { Button, Col, Form, Input, Row, Select } from "antd"

const handleStyle = {left: 10}

const options = [{value: "gold"}, {value: "lime"}, {value: "green"}, {value: "cyan"}]

function NodeA({data, isConnectable}: any) {
	
	const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement)
	const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
		console.log(evt.target.value)
	}, [])
	
	return (
		<div className={ styles.customNode } ref={ nodeRef }>
			<div className={styles.customNodeWrapper}>
				数据库表A
			</div>
			<div className={ styles.customNodeRow }>
				<Form layout="vertical" size="small">
					<Form.List name="data">
						{ (fields, {add, remove, move}) => {
							return (
								<div className={ styles.form }>
									{ fields.map(field => {
										return (
											<div className={ styles.formRow }>
												<div className={ styles.formRowLeftWrapper }>
													<Handle
														id="a-1"
														type="target"
														position={Position.Top}
														isConnectable={ isConnectable }
													/>
													<Handle
														id="a-2"
														type="source"
														position={ Position.Top }
														isConnectable={ isConnectable }
													/>
												</div>
												<Row gutter={10}>
													<Col>
														<Form.Item name="name">
															<Input placeholder="请填写自定义属性"/>
														</Form.Item>
													</Col>
													<Col>
														<Form.Item name="status">
															<Select
																placeholder="请填写自定义属性"
																defaultValue={ "gold" }
																getPopupContainer={ () => nodeRef.current }
															>
																{ options.map(option => <Select.Option
																	key={ option.value }
																	value={ option.value }>{ option.value }</Select.Option>) }
															</Select>
														</Form.Item>
													</Col>
													<Col>
														<Form.Item name="type">
															<Input placeholder="请填写自定义属性"/>
														</Form.Item>
													</Col>
												</Row>
												<div className={ styles.formRowRightWrapper }>
													<Handle
														id="a-3"
														type="target"
														position={Position.Top}
														isConnectable={ isConnectable }
													/>
													<Handle
														id="a-4"
														type="source"
														position={ Position.Top }
														isConnectable={ isConnectable }
													/>
												</div>
											</div>
										)
									}) }
									<Button onClick={ () => add() }>添加</Button>
								</div>
							)
						} }
					</Form.List>
				</Form>
			</div>
			{/*<Handle*/}
			{/*	type="source"*/}
			{/*	position={ Position.Bottom }*/}
			{/*	id="a"*/}
			{/*	style={ handleStyle }*/}
			{/*	isConnectable={ isConnectable }*/}
			{/*/>*/}
			{/*<Handle type="source" position={ Position.Bottom } id="b" isConnectable={ isConnectable }/>*/}
		</div>
	)
}

export default NodeA
