import { dummyLocation } from '../../dummy-data/dummy';
import { Pressable, View, Text, StyleSheet } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { maxDescLength } from '../../../dtos';
import { loginBtn, loginBtnActive } from '../../../styling';
import { borderColor, mainBackgroundColor } from '../../../styling';

export default function CreateActivity() {

    const [selectedLanguage, setSelectedLanguage] = useState();

    function submitActivity() {

    }

    function createActivity() {

    }

    function activityList() {

    }


    return (<>
        <View style={styles.view}>
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
                <Picker selectedValue={selectedLanguage} style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
                    {dummyLocation.map((locals, i) => { return <Picker.Item label={locals.label} value={locals.value} key={i} /> })}
                </Picker>
            </View>

            <View style={styles.buttonDiv}>
                <Pressable onPress={() => { }} style={({ pressed }) => [
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