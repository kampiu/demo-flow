import React, { Component, PropsWithChildren } from "react"
import { ContextMenuProvider as BaseContextMenuProvider } from "./store"
import ContextMenu from "./ContextMenu"

function ContextMenuProvider({children}: PropsWithChildren) {
	
	return (
		<BaseContextMenuProvider>
			<ContextMenu>
				{ children }
			</ContextMenu>
		</BaseContextMenuProvider>
	)
}

export default ContextMenuProvider
