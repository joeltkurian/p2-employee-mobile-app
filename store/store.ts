import { createStore } from '@reduxjs/toolkit';
import { Activity, Problem} from '../dtos';
import reducer from './reducer';

export interface ActivityState{
    activities: Activity[];
    activity: Activity;
}

export interface ProblemState{
    problems: Problem[];
    problem: Problem;
}

export interface AppState extends ActivityState, ProblemState{

}

export const store = createStore(reducer)