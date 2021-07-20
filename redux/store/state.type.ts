import { AppReducerType } from "../reducers/app/app.reducer.types";
import { AuthStateType } from "../reducers/auth/auth.reducer.types";


export interface ReduxState {
    auth: AuthStateType,
    app: AppReducerType;
};

