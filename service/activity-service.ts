import axios from 'axios';
import { Activity } from '../dtos'

class ActivityService{

    private URI: string;
    constructor (){
        this.URI = "http://20.121.74.219:3000/"
    }

    getAllActivities(): Promise<Activity[]> {
        return axios
            .get(this.URI + `activities`)
                .then(result => result.data)
                    .catch(error => {console.log(error)});
    }

    getActivityById(activityId: Activity): Promise<Activity> {
        return axios
            .get(this.URI + `activities/${activityId}`)
                .then(result => result.data)
                    .catch(error => {console.log(error)});
    }

    createActivity(activity: Activity): Promise<Activity> {
        return axios
            .post(this.URI + `activities`, activity)
                .then(result => result.data)
                    .catch(error => {console.log(error)});
    }

    updateActivity(activity: Activity): Promise<Activity> {
        return axios
            .put(this.URI + `activities/:id`, activity)
                .then(result => result.data)
                    .catch(error => {console.log(error)});
    }

    cancelActivity(activityId: string): Promise<Activity> {
        console.log(`activities/${activityId}/cancel`)
        return axios
            .patch(this.URI + `activities/${activityId}/cancel`)
                .then(result => result.data)
                    .catch(error => {console.log(error)});
    }

}

const activityService = new ActivityService();
export default activityService;