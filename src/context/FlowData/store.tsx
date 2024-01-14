import {useImmer} from "use-immer"
import {createContainer} from 'react-tracked';
import type {IFlowDataState} from "./types";

const useFlowDataState = () => useImmer<IFlowDataState>({
	activeNode: null
});

export const {
	Provider: FlowDataProvider,
	useSelector: useFlowDataSelector,
	useUpdate: useSetFlowDataState,
} = createContainer<IFlowDataState, (...args: any[]) => any, IFlowDataState>(useFlowDataState);
