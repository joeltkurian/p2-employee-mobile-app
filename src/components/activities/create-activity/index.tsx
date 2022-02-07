import { dummyData } from '../dummy-data/dummy'
import { dummyLocation } from '../dummy-data/dummy'
import { Pressable, View, Text, Image } from "react-native"
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import styles from './styles';
import { maxDescLength } from '../../../constants/constants'


export default function CreateActivity(){

    const [selectedLanguage, setSelectedLanguage] = useState();

    function submitActivity(){

    }

    function createActivity(){

    }

    function activityList(){

    }


    return(
        <View style={styles.view}>

            <View style={styles.buttonDiv}>
                <Pressable onPress={()=>{}} style={styles.buttonA}><Text style={styles.buttonText}>All Activities</Text></Pressable>
                <Pressable onPress={()=>{}} style={styles.buttonB}><Text style={styles.buttonText}>New Activity</Text></Pressable>
            </View>

            <View style={styles.table}>
                <Text style={styles.h1}>Title :</Text>
                <TextInput style={styles.input}></TextInput>

                <Text style={styles.h1}>Description :</Text>
                <TextInput multiline={true} maxLength={maxDescLength} style={styles.inputDesc}></TextInput>

                <Text style={styles.h1}>Start Time :</Text>
                <TextInput style={styles.input}></TextInput>

                <Text style={styles.h1}>End Time :</Text>
                <TextInput style={styles.input}></TextInput>

                <Text style={styles.h1}>Location :</Text>

                <Picker selectedValue={selectedLanguage} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
                    {dummyLocation.map(locals => {return <Picker.Item label={locals.label} value={locals.value} />})}
                </Picker>

            </View>

            <View style={styles.buttonDiv}>
                <Pressable onPress={()=>{}} style={styles.buttonC}><Text style={styles.buttonText}>Submit</Text></Pressable>
            </View>

        </View>
    )

}