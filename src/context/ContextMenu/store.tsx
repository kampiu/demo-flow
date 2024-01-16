import { useImmer } from "use-immer"
import { createContainer } from "react-tracked"
import type { IContextMenuState } from "./types"

const useContextMenuState = ({menu}: IContextMenuState) => useImmer<IContextMenuState>({
	menu: []
})

export const {
	Provider: ContextMenuProvider,
	useSelector: useContextMenuSelector,
	useUpdate: useSetContextMenuState,
} = createContainer<IContextMenuState, (...args: any[]) => any, IContextMenuState>(useContextMenuState)
