import { createStore } from '@reduxjs/toolkit';
import { Activity, Employee, Problem} from '../dtos';
import reducer from './reducer';

export interface ActivityState{
    activities: Activity[];
    activity: Activity;
}

export interface ProblemState{
    problems: Problem[];
    problem: Problem;
}

export interface EmployeeState{
    employee: Employee;
}

export interface AppState extends ActivityState, ProblemState, EmployeeState{

}

export const store = createStore(reducer)