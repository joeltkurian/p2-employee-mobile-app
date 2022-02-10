import * as Actions from './actions'
import { AppState } from './store'
import { Activity, defaultActivity } from '../dtos';

const initialState:AppState ={
    activities: [],
    activity: defaultActivity,
}

const reducer = (
    state:AppState=initialState,
    action:Actions.AppAction,
):AppState => {
    const newState={...state};
    switch(action.type){

        case Actions.ActivityActions.GetAllActivities:
            newState.activities=action.payload as Activity[];
            return newState;
        case Actions.ActivityActions.GetActivity:
            newState.activity=action.payload as Activity;
            return newState;
        case Actions.ActivityActions.UpdateActivity:
            newState.activity=action.payload as Activity;
            return newState;

        default: return state;
    
    }
}

export default reducer