import { useCallback } from "react"
import { useSetContextMenuState } from "@/context/ContextMenu"
import type { IContextMenuActions, IContextMenuState } from "@/context/ContextMenu"

export default () => {
	
	const setContextMenuState = useSetContextMenuState()
	
	return useCallback<IContextMenuActions["setMenu"]>((menu, el = null) => {
		setContextMenuState((preStore: IContextMenuState) => {
			preStore.el = el
			preStore.menu = menu
		})
	}, [setContextMenuState])
	
	
}
