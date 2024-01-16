import type { MenuProps } from "antd"

/** 右键菜单数据hooks状态 */
export interface IContextMenuState {
	menu?: MenuProps["items"]
	el?: HTMLElement | null
}

/** 右键菜单方法hooks事件 */
export interface IContextMenuActions {
	setMenu: (menu: IContextMenuState["menu"], el?: IContextMenuState["el"]) => void
}

/** 右键菜单数据hooks元数据 */
export type IContextMenuStore = IContextMenuState & IContextMenuActions

