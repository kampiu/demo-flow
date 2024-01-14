
/** 流程数据hooks状态 */
export interface IFlowDataState {
	activeNode?: null | string
}

/** 流程方法hooks事件 */
export interface IFlowDataActions {
	setActiveNode: (nodeId?: string) => void
}

/** 流程数据hooks元数据 */
export type IFlowDataStore = IFlowDataState & IFlowDataActions

