import { ActionTypes, IActions, ThemeState } from "../type";

const DEFAULT_STATE: ThemeState = {
	Theme: true,
};

const themeReducer = (state = DEFAULT_STATE, action: IActions) => {
	switch (action.type) {
		case ActionTypes.changeMode:
			return {
				...state,
				Theme: !state.Theme,
			};
		default:
			return state;
	}
};

export default themeReducer;
