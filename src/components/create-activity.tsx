import { dummyData } from '../dummy-data/dummy'
import { dummyLocation } from '../dummy-data/dummy'
import { Pressable, View, Text, Image } from "react-native"
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'



export default function CreateActivity(){

    const [selectedLanguage, setSelectedLanguage] = useState();

    function submitActivity(){

    }

    function createActivity(){

    }

    function activityList(){

    }


    return(
        <View>
            <View>
                <Pressable onPress={()=>{}}><Text>All Activities</Text></Pressable>
                <Pressable onPress={()=>{}}><Text>New Activity</Text></Pressable>
            </View>
            <View>
                <Text>Title</Text>
                <TextInput></TextInput>
                <Text>Description</Text>
                <TextInput></TextInput>
                <Text>Start Time</Text>
                <TextInput></TextInput>
                <Text>End Time</Text>
                <TextInput></TextInput>
                <Text>Location</Text>
                <Picker selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
                    {dummyLocation.map(locals => {return <Picker.Item label={locals.label} value={locals.value} />})}
                </Picker>
                <Pressable onPress={()=>{}}><Text>Submit</Text></Pressable>
            </View>

        </View>
    )

}