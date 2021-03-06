import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { useContext, useEffect, useState } from "react";
import { userContext, clockContext } from "../userContext";
import {
    borderColor,
    loginBtn,
    loginBtnActive,
    paddingColor,
    textColor,
    mainBackgroundColor
} from "../styling";
import { MyWorkLog } from "../dtos";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ClockInOut() {
    const account = useContext(userContext);
    const clock = useContext(clockContext);
    const [hoursPage, setHoursPage] = useState(false);
    const [log, setLog] = useState<MyWorkLog[]>([]);
    const [total, setTotal] = useState<MyWorkLog[]>([]);
    const [update, setUpdate] = useState<boolean>(false);


    useEffect(() => {
        (async () => {
            const response = await fetch(`http://20.121.74.219:3000/employees/${account.user.id}/worklogs`);
            const logs: MyWorkLog[] = await response.json();
            setLog(logs);
            clock.setClockedIn(log.length % 2 === 0 ? false : true);
            if (logs.length % 2 === 0) {
                const showMessage = await AsyncStorage.getItem("showAlert")
                if (showMessage === "true") {
                    alert("Please remember to Clock in before beginning work!");
                    await AsyncStorage.setItem("showAlert", "false");
                }
            }
            else {
                const showMessage = await AsyncStorage.getItem("showAlert")
                if (showMessage === "true") {
                    await AsyncStorage.setItem("showAlert", "false");
                }
            }
        })();
        (async () => {
            const response = await fetch(`http://20.121.74.219:3000/worklogs`);
            const logs: MyWorkLog[] = await response.json();
            setTotal(logs);
        })();
    }, [update, clock])

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
                    onPress={async () => {
                        let workLog;
                        if (log.length % 2 === 0) {
                            workLog = { id: total.length, timestamp: Date.now(), employeeId: 0, action: 'CHECKIN' }
                            clock.setClockedIn(true);
                        }
                        else {
                            workLog = { id: total.length, timestamp: Date.now(), employeeId: 0, action: 'CHECKOUT' }
                            clock.setClockedIn(false);
                        }
                        console.log(workLog);
                        const response = await fetch(`http://20.121.74.219:3000/employees/${account.user.id}/worklogs`, {
                            method: "POST",
                            body: JSON.stringify(workLog),
                            headers: { 'content-type': 'application/json', 'Accept': 'application/json' }
                        })
                        const savedLog = await response.json();
                        setUpdate(!update);
                    }}
                >
                    <Text style={styles.clockBtnText}>{log.length % 2 === 0 ? "Clock-in" : "Clock-out"}</Text>
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
            {hoursPage ? <Hours hours={log} /> : <></>}
        </>
    );
}

export function Hours(props: { hours: MyWorkLog[] }) {

    function renderLog(log: MyWorkLog) {
        const date = new Date(log.timestamp);
        return (
            <View style={styles.hourRecord}>
                <Text>{`${date.toDateString()} ${date.toLocaleTimeString()}`}</Text>
                <Text>{log.action}</Text>
            </View>
        )
    }

    return <View style={styles.hours}>
        <FlatList data={props.hours} renderItem={({ item }) => renderLog(item)} keyExtractor={item => item.id.toString()} />
    </View>;
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
    },
    hourRecord: {
        backgroundColor: mainBackgroundColor,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: borderColor,
        padding: 5,
        fontSize: 20,
        alignItems: 'center',
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "space-between"
    }
});
