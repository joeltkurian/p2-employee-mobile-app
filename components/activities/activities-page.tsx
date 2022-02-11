import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { borderColor, loginBtn, loginBtnActive, paddingColor, textColor } from "../../styling";
import ActivitiesList from "./activity-functions/activity-list";
import CreateActivity from "./activity-functions/create-activity";
import { Activity, defaultActivity } from '../../dtos';
import activityService from "../../service/activity-service";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities } from "../../store/actions";
import { AppState } from "../../store/store";

export default function ActivitiesPage() {
    const [newActivity, setNewActivity] = useState(false);
    const [activityDetails, setActivityDetails] = useState<Activity>(defaultActivity);
    const dispatch = useDispatch();
    const activitiesList = useSelector((state: AppState) => state.activities);

    useEffect(()=> {
        activityService.getAllActivities().then(response => dispatch(getAllActivities(response)))
    },[])

    return (<View style={styles.totalActivity}>
        <View style={styles.buttonContainer}>
            <Pressable onPress={() => {setNewActivity(false); setActivityDetails(defaultActivity)}}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? loginBtnActive
                            : loginBtn
                    },
                    styles.clockBTN
                ]}><Text style={styles.clockBtnText}>All Activities</Text></Pressable>
            <Pressable onPress={() => {setNewActivity(true)}}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? loginBtnActive
                            : loginBtn
                    },
                    [styles.clockBTN, { marginRight: 50 }]
                ]}><Text style={styles.clockBtnText}>New Activity</Text></Pressable>
        </View>
        <View style={styles.activityContainer}>
            {newActivity ?
                <CreateActivity setNewActivity={setNewActivity}/>
                :
                <ActivitiesList activityDetails={activityDetails} setActivityDetails={setActivityDetails} activityList={activitiesList}/>
            }
        </View>
    </View>);
}

const styles = StyleSheet.create({
    totalActivity: {
        marginTop: '38%',
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        marginLeft: '30%',
        flexDirection: 'row',
    },
    activityContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '80%',
    },
    hours: {
        backgroundColor: paddingColor,
        borderColor: borderColor,
        borderWidth: 1,
        borderRadius: 10,
        bottom: '1%',
        width: '90%',
        height: '60%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    clockBTN: {
        margin: 5,
        borderRadius: 8,

        padding: 4,
    },
    clockBtnText: {
        textAlign: 'center',
        color: textColor,
        fontWeight: 'bold',
        fontSize: 20,
    }
});