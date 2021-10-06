import { ActionTypes, IActions, LoaderState } from "../type";

const DEFAULT_STATE: LoaderState = {
	show: true,
};

const loaderReducer = (state = DEFAULT_STATE, action: IActions) => {
	switch (action.type) {
    case ActionTypes.showLoader:
      const show = action.payload;
			return {
				...state,
				show,
			};
		default:
			return state;
	}
};

export default loaderReducer;
