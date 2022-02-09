import { Activity } from '../dtos';

export enum ActivityActions{
    GetAllActivities="GET_ALL_ACTIVITIES",
    GetActivity="GET_ACTIVITY",
    UpdateActivity="UPDATE_ACTIVITY"
}

export interface AppAction{
    type: string;
    payload: any;
}

export interface ActivityAction extends AppAction{
    type: ActivityActions;
    payload: Activity | Activity[];
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