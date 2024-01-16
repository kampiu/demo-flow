import React, { PropsWithChildren } from "react"
import { ContextMenuProvider as BaseContextMenuProvider } from "./store"

function ContextMenuProvider({children}: PropsWithChildren) {
	
	return (
		<BaseContextMenuProvider>
			{ children }
		</BaseContextMenuProvider>
	)
}

export default ContextMenuProvider
