import { SharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selectors";
import { SharedState } from "./shared/shared.state";

export interface AppState {
  [SHARED_STATE_NAME] : SharedState
}

// appReducer : for shared states between multiple modules only
export const appReducer = {
  [SHARED_STATE_NAME] : SharedReducer,
}
