import { Pressable, View, Text, ImageBackground, StyleSheet } from "react-native"
import { Activity, activityLocationBasedImages, defaultActivity } from "../../../dtos";
import { borderColor, loginBtn, loginBtnActive, mainBackgroundColor } from "../../../styling";


export default function ActivityDetails(props: { activity: Activity, setSeeMore: Function }) {
    const index = activityLocationBasedImages.findIndex(c => c.location === props.activity.location);

    function handleCancel(){
        // once backend is connected function should be similar to change status on P1
    }

    return (<>
        {/* <Pressable onPress={() => props.setSeeMore(defaultActivity)} style={styles.acitivityDetailClose} /> */}
        <View style={styles.card}>
            <Text style={styles.infoReservation}>
                {props.activity.title}
            </Text>
            <View style={styles.border} />

            {index != -1 ?
                <ImageBackground source={{ uri: activityLocationBasedImages[index].photoLink }} style={styles.complaintPhoto}>
                    <View style={styles.locationView}>
                        <Text style={styles.locationText}>{props.activity.location}</Text>
                    </View>
                </ImageBackground>
                : <></>
            }
            <View style={styles.border} />
            <Text style={styles.info}>
                Description: {props.activity.desc}
            </Text>
            <View style={styles.border} />
            <Text style={styles.info}>
                Start:{props.activity.startTime} - End:{props.activity.endTime}
            </Text>
        </View>
        <Pressable onPress={handleCancel}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? loginBtnActive
                        : loginBtn
                },
                styles.cancelBTN
            ]}>
            <Text style={styles.info}>Cancel Activity </Text>
        </Pressable>
    </>)
}

const styles = StyleSheet.create({
    info: {
        alignSelf: "stretch",
        fontSize: 20,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    acitivityDetailClose: {
        position: 'absolute',

        width: '100%',
        height: '100%',
    },
    card: {
        backgroundColor: '#FCBA04',
        borderColor: '#B68602',
        borderWidth: 5,
        borderRadius: 10,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    infoReservation: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    border: {
        marginTop: 5,
        borderWidth: 1,
        width: '100%',
        borderColor: '#000',
        marginBottom: 5,
    },
    complaintPhoto: {
        width: 325,
        height: 225,
    },
    locationView: {
        top: '80%',
        right: "3%",
        alignItems: 'flex-end',
    },
    locationText: {
        backgroundColor: mainBackgroundColor,
        borderWidth: 1,
        borderColor: borderColor,
        padding: 3,
        color: '#000',
        fontSize: 18,
    },
    cancelBTN: {
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 8,
        padding: 8,
        height: 40,
        elevation: 5,
    },
});