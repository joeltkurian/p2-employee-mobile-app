import { createStore } from '@reduxjs/toolkit';
import { Activity } from '../dtos';
import reducer from './reducer';

export interface ActivityState{
    activities: Activity[];
    activity: Activity;
}

export interface AppState extends ActivityState{

}

export const store = createStore(reducer)