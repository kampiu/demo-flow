import { useSetFlowDataState } from "../context/FlowData"
import type { IFlowDataState } from "../context/FlowData"
import { useCallback } from "react"

export default () => {
	
	const setFlowDataState = useSetFlowDataState()
	
	return useCallback((nodeId?: null | string) => {
		setFlowDataState((preStore: IFlowDataState) => {
			preStore.activeNode = nodeId
		})
	}, [setFlowDataState])
}
