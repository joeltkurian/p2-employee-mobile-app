import { dummyLocation } from '../../dummy-data/dummy';
import { Pressable, View, Text, StyleSheet, Alert } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Activity, maxDescLength, timeFormat } from '../../../dtos';
import { loginBtn, loginBtnActive } from '../../../styling';
import { borderColor, mainBackgroundColor } from '../../../styling';
import activityService from '../../../service/activity-service';
import { useDispatch } from 'react-redux';
import { getAllActivities } from '../../../store/actions';

interface ActivitiesPageProps {
    setNewActivity: (newActivity: boolean) => void;
}


export default function CreateActivity({setNewActivity}: ActivitiesPageProps) {

    const [selectedLocation, setSelectedLocation] = useState(dummyLocation[0].label);
    const [titleInput, setTitleInput] = useState('');
    const [descInput, setDescInput] = useState('');
    const [startTimeInput, setStartTimeInput] = useState("");
    const [endTimeInput, setEndTimeInput] = useState("");
    const dispatch = useDispatch();

    function submitActivity() {
        if(checkTime()){
        const newActivity: Activity = {
            id: "",
            title: titleInput,
            desc: descInput,
            startTime: Number(startTimeInput),
            endTime: Number(endTimeInput),
            location: selectedLocation,
            status: "On Schedule",
        }
        activityService.createActivity(newActivity).then((response)=>{
            activityService.getAllActivities().then((response)=>{
                dispatch(getAllActivities(response))
            })
        })
        
        setNewActivity(false);}else{
            console.log("button click");
            showAlert()
        }
    }

    function handleTitleInput(event: any){
        setTitleInput(event)
    }

    function handleDescInput(event: any){
        setDescInput(event)
    }

    function handleStartTimeInput(event: any){
        setStartTimeInput(event)
    }

    function handleEndTimeInput(event: any){
        setEndTimeInput(event)
    }

    function checkTime(){
        if(startTimeInput.match(timeFormat) && endTimeInput.match(timeFormat)){
            return true;
        }else{
            return false;
        }
    }

    function showAlert(){
        console.log("Alert Triggered");
        Alert.alert(
            "Incorrect Time Input",
            "Please enter a valid time in HHMM format",
            [
              {
                text: "Understood",
                onPress: () => Alert.alert("Understood Pressed"),
                style: "cancel",
              },
            ],
            {
              cancelable: true,
              onDismiss: () =>
                Alert.alert(
                  "This alert was dismissed by tapping outside of the alert dialog."
                ),
            }
          );
    }

    return (<>
        <View style={styles.view}>
            <View style={styles.table}>
                <Text style={styles.h1}>Title :</Text>
                <TextInput style={styles.input} value={titleInput} onChangeText={(value)=>handleTitleInput(value)}/>

                <Text style={styles.h1}>Description :</Text>
                <TextInput multiline={true} maxLength={maxDescLength} style={styles.inputDesc}  value={descInput} onChangeText={(value)=>handleDescInput(value)}/>

                <Text style={styles.h1}>Start Time :</Text>
                <TextInput style={styles.input} value={startTimeInput} onChangeText={(value)=>handleStartTimeInput(value)}/>

                <Text style={styles.h1}>End Time :</Text>
                <TextInput style={styles.input} value={endTimeInput} onChangeText={(value)=>handleEndTimeInput(value)}/>

                <Text style={styles.h1}>Location :</Text>
                <Picker selectedValue={selectedLocation} style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedLocation(itemValue)}>
                    {dummyLocation.map((locals, i) => { return <Picker.Item label={locals.label} value={locals.label} key={i} /> })}
                </Picker>
            </View>

            <View style={styles.buttonDiv}>
                <Pressable onPress={submitActivity} style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? loginBtnActive
                            : loginBtn
                    },
                    styles.buttonC
                ]}>
                    <Text style={styles.buttonText}>Submit</Text></Pressable>
            </View>
        </View></>
    )

}
const styles = StyleSheet.create({
    buttonC: {
        marginTop: -10,
        borderRadius: 8,
        elevation: 5,
        padding: 10,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },

    buttonDiv: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
    },

    view: {
        borderWidth: 1,
        backgroundColor: mainBackgroundColor,
        borderColor: borderColor,
        height: 'auto',
        padding: 1,
        width: '90%',
        overflow: 'hidden'
    },

    h1: {
        textAlign: 'center',
        fontSize: 25,
        fontStyle: 'italic',
        color: '#000',

    },
    input: {
        backgroundColor: '#FCF7F8',
        padding: 8,
        fontSize: 18,
        alignItems: 'center',
    },

    inputDesc: {
        backgroundColor: '#FCF7F8',
        padding: 10,
        fontSize: 20,
        alignItems: 'center',
        height: 75,
    },

    picker: {
        padding: 10,
        fontSize: 30,
        backgroundColor: '#FCF7F8',
        color: '#000000',
    },

    table: {
        flexDirection: 'column',
        padding: 20,

    },
});