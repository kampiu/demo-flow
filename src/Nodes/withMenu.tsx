import { Dropdown, type MenuProps } from "antd"
import React, { ComponentType, useEffect, useRef, useState } from "react"
import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from "react"
import FlowManager from "@/FlowManager"

export default <Instance, Props>(NodeComponent: ForwardRefExoticComponent<PropsWithoutRef<Props> & RefAttributes<Instance>>) => (props: any) => {
	
	const nodeInstance = useRef<any>({})
	
	const [menu, setMenu] = useState<MenuProps["items"]>()
	
	useEffect(() => {
		const config = FlowManager.getNodeConfig(props.type)
		setMenu(config?.generateContextMenu?.() || [])
	}, [props.type])
	
	return (
		<Dropdown menu={ {items: menu} } trigger={ ["contextMenu"] }>
			<NodeComponent ref={ nodeInstance } { ...props } />
		</Dropdown>
	)
}
