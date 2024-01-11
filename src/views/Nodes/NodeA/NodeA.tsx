import type { ChangeEvent } from "react"
import { useCallback, useRef } from "react"
import { Handle, Position } from "reactflow"
import styles from "./NodeA.module.less"
import { Button, Col, Form, Input, Row, Select, Checkbox, Switch, Dropdown } from "antd"
import clsx from "clsx"
import { DataTypeOptions } from "./constants"

const handleStyle = {left: 10}

const options = [{value: "gold"}, {value: "lime"}, {value: "green"}, {value: "cyan"}]

const items = [
	{
		label: <a href="https://www.antgroup.com">1st menu item</a>,
		key: "0",
	},
	{
		label: <a href="https://www.aliyun.com">2nd menu item</a>,
		key: "1",
	},
	{
		type: "divider",
	},
	{
		label: "3rd menu item",
		key: "3",
	},
]

function NodeA({data, isConnectable}: any) {
	
	const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement)
	const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
		console.log(evt.target.value)
	}, [])
	
	return (
		<div className={ styles.customNode } ref={ nodeRef }>
			<div className={ styles.customNodeWrapper }>
				数据库表A
			</div>
			<div className={ styles.customNodeRow }>
				<Form layout="vertical" size="small">
					<div className={ styles.row }>
						<div className={ styles.rowCol } style={ {width: 80} }>
							字段名
						</div>
						<div className={ styles.rowCol } style={ {width: 92} }>
							数据类型
						</div>
						<div className={ styles.rowCol } style={ {width: 70} }>
							长度/范围
						</div>
						<div className={ styles.rowCol } style={ {width: 40} }>
							为空
						</div>
						<div className={ styles.rowCol } style={ {width: 100} }>
							默认值
						</div>
						<div className={ styles.rowCol } style={ {width: 40} }>
							索引
						</div>
						<div className={ styles.rowCol } style={ {width: 40} }>
							唯一
						</div>
						<div className={ styles.rowCol } style={ {width: 100} }>
							描述
						</div>
					</div>
					<Form.List name="data">
						{ (fields, {add, remove, move}) => {
							return (
								<div className={ styles.form }>
									{ fields.map(field => {
										return (
											<div className={ clsx(styles.row, styles.formRow) }>
												<div className={ styles.formRowLeftWrapper }>
													<Handle
														id={ `${ field.name }_custom_point_a` }
														type="target"
														position={ Position.Left }
														isConnectable={ isConnectable }
													/>
													<Handle
														id={ `${ field.name }_custom_point_b` }
														type="source"
														position={ Position.Left }
														isConnectable={ isConnectable }
													/>
												</div>
												<div className={ styles.rowCol } style={ {width: 80} }>
													<Form.Item name={ [field.name, "columnName"] }>
														<Input placeholder="字段名"/>
													</Form.Item>
												</div>
												<div className={ styles.rowCol } style={ {width: 92} }>
													<Form.Item name={ [field.name, "dataType"] }>
														<Select
															getPopupContainer={() => nodeRef.current}
															placeholder="数据类型"
															options={ DataTypeOptions }
														/>
														{/*<Dropdown menu={ {items: DataTypeOptions} } trigger={ ["click"] } getPopupContainer={() => nodeRef.current}>*/}
														{/*	<a onClick={ (e) => e.preventDefault() }>*/}
														{/*		Click me*/}
														{/*	</a>*/}
														{/*</Dropdown>*/}
													</Form.Item>
												</div>
												<div className={ styles.rowCol } style={ {width: 70} }>
													<Form.Item name={ [field.name, "length"] }>
														<Input placeholder="长度/范围"/>
													</Form.Item>
												</div>
												<div className={ styles.rowCol } style={ {width: 40} }>
													<Form.Item name={ [field.name, "nullable"] }>
														<Switch/>
													</Form.Item>
												</div>
												<div className={ styles.rowCol } style={ {width: 100} }>
													<Form.Item name={ [field.name, "defaultValue"] }>
														<Input placeholder="默认值"/>
													</Form.Item>
												</div>
												<div className={ styles.rowCol } style={ {width: 40} }>
													<Form.Item noStyle name={ [field.name, "index"] }
													           valuePropName="checked">
														<Switch/>
													</Form.Item>
												</div>
												<div className={ styles.rowCol } style={ {width: 40} }>
													<Form.Item name={ [field.name, "unique"] } valuePropName="checked">
														<Switch/>
													</Form.Item>
												</div>
												<div className={ styles.rowCol } style={ {width: 100} }>
													<Form.Item name={ [field.name, "description"] }>
														<Input placeholder="描述"/>
													</Form.Item>
												</div>
												<div className={ styles.formRowRightWrapper }>
													<Handle
														id={ `${ field.name }_custom_point_c` }
														type="target"
														position={ Position.Right }
														isConnectable={ isConnectable }
													/>
													<Handle
														id={ `${ field.name }_custom_point_d` }
														type="source"
														position={ Position.Right }
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
			{/*<Handle*/ }
			{/*	type="source"*/ }
			{/*	position={ Position.Bottom }*/ }
			{/*	id="a"*/ }
			{/*	style={ handleStyle }*/ }
			{/*	isConnectable={ isConnectable }*/ }
			{/*/>*/ }
			{/*<Handle type="source" position={ Position.Bottom } id="b" isConnectable={ isConnectable }/>*/ }
		</div>
	)
}

export default NodeA
