import * as Actions from './actions'
import { AppState } from './store'
import { Activity, defaultActivity, Problem, defaultProblem, Employee } from '../dtos';

const initialState:AppState ={
    activities: [],
    activity: defaultActivity,
    problems: [],
    problem: defaultProblem,
    employee: {
        id: 0,
        isManager: true,
        fname: "",
        lname: "",
        username: "",
        password: "",
    },
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
        
        case Actions.ProblemActions.GetAllProblems:
            newState.problems=action.payload as Problem[];
            return newState;
        case Actions.ProblemActions.GetProblem:
            newState.problem=action.payload as Problem;
            return newState;
        case Actions.ProblemActions.UpdateProblem:
            newState.problem=action.payload as Problem;
            return newState;   

        case Actions.EmployeeActions.Login:
            newState.employee=action.payload as Employee;
            return newState;

        default: return state;
    
    }
}

export default reducer;