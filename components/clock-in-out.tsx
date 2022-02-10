import { View, Text, StyleSheet, Pressable } from "react-native";
import { useContext, useState } from "react";
import { userContext } from "../userContext";
import {
    borderColor,
    loginBtn,
    loginBtnActive,
    paddingColor,
    textColor
} from "../styling";

export default function ClockInOut() {
    const account = useContext(userContext);
    const [hoursPage, setHoursPage] = useState(false);

    return (
        <>
            <View style={styles.clockContainer}>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? loginBtnActive : loginBtn
                        },
                        [styles.clockBTN, { marginRight: 50 }]
                    ]}
                >
                    <Text style={styles.clockBtnText}>Clock-in</Text>
                </Pressable>

                <Pressable
                    onPress={() => {
                        setHoursPage(hoursPage ? false : true);
                    }}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? loginBtnActive : loginBtn
                        },
                        styles.clockBTN
                    ]}
                >
                    <Text style={styles.clockBtnText}>Hours</Text>
                </Pressable>
            </View>
            {hoursPage ? <Hours /> : <></>}
        </>
    );
}

export function Hours() {
    return <View style={styles.hours}></View>;
}

const styles = StyleSheet.create({
    clockContainer: {
        backgroundColor: paddingColor,
        borderColor: borderColor,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: "row"
    },
    hours: {
        backgroundColor: paddingColor,
        borderColor: borderColor,
        borderWidth: 1,
        borderRadius: 10,
        bottom: "1%",
        width: "90%",
        height: "60%",
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: "row"
    },
    text: {
        color: textColor,
        fontWeight: "bold",
        fontSize: 15,
        paddingRight: 15
    },
    clockBTN: {
        marginTop: 10,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 125
    },
    clockBtnText: {
        color: textColor,
        fontWeight: "bold",
        fontSize: 25
    }
});
