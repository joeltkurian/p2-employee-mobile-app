import { Activity, Employee, Problem } from '../dtos';

export enum ActivityActions{
    GetAllActivities="GET_ALL_ACTIVITIES",
    GetActivity="GET_ACTIVITY",
    UpdateActivity="UPDATE_ACTIVITY",
}

export enum ProblemActions{
    GetAllProblems="GET_ALL_PROBLEMS",
    GetProblem="GET_PROBLEM",
    UpdateProblem="UPDATE_PROBLEM",
}

export enum EmployeeActions{
    Login="LOGIN",
}

export interface AppAction{
    type: string;
    payload: any;
}

export interface ActivityAction extends AppAction{
    type: ActivityActions;
    payload: Activity | Activity[];
}

export interface ProblemAction extends AppAction{
    type: ProblemActions;
    payload: Problem | Problem[];
}

export interface EmployeeAction extends AppAction{
    type: EmployeeActions;
    payload: Employee;
}

export function loginUser(employee:Employee):EmployeeAction{
    const action:EmployeeAction={
        type:EmployeeActions.Login,
        payload:employee,
    }
    return action;
}

export function getAllActivities(activities:Activity[]):ActivityAction{
    const action:ActivityAction={
        type:ActivityActions.GetAllActivities,
        payload:activities,
    }
    return action;
}

export function getActivity(activity:Activity):ActivityAction{
    const action:ActivityAction={
        type:ActivityActions.GetActivity,
        payload:activity,
    }
    return action;
}

export function updateActivity(activity:Activity):ActivityAction{
    const action:ActivityAction={
        type:ActivityActions.UpdateActivity,
        payload:activity,
    }
    return action;
}

export function getAllProblems(problems:Problem[]):ProblemAction{
    const action:ProblemAction={
        type:ProblemActions.GetAllProblems,
        payload:problems,
    }
    return action;
}

export function getProblem(problem:Problem):ProblemAction{
    const action:ProblemAction={
        type:ProblemActions.GetProblem,
        payload:problem,
    }
    return action;
}

export function updateProblem(problem:Problem):ProblemAction{
    const action:ProblemAction={
        type:ProblemActions.UpdateProblem,
        payload:problem,
    }
    return action;
}