import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../userContext";
import {
    borderColor,
    loginBtn,
    loginBtnActive,
    paddingColor,
    textColor
} from "../styling";
import { MyWorkLog } from "../dtos";

export default function ClockInOut() {
    const account = useContext(userContext);
    const [hoursPage, setHoursPage] = useState(false);
    const [log,setLog] = useState<MyWorkLog[]>([]);
    const [update,setUpdate] = useState<boolean>(false);

    useEffect(()=>{
        (async ()=>{
            const response = await fetch(`http://20.121.74.219:3000/employees/${account.user.id}/worklogs`);
            const logs:MyWorkLog[] = await response.json();
            setLog(logs);
            if(logs.length%2===0){
                alert("Please remember to Clock in before beginning work!");
            }
        })();        
    },[update])

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
                    onPress={async ()=>{
                        let workLog;
                        if(log.length%2 === 0){
                            workLog = {id:log.length, timestamp:Date.now(), employeeId:0, action:'CHECKIN'}
                        }
                        else{
                            workLog = {id:log.length, timestamp:Date.now(), employeeId:0, action:'CHECKOUT'}
                        }
                        console.log(workLog);
                        const response = await fetch(`http://20.121.74.219:3000/employees/${account.user.id}/worklogs`,{
                            method:"POST",
                            body:JSON.stringify(workLog),
                            headers:{ 'content-type': 'application/json', 'Accept': 'application/json' }
                        })
                        const savedLog = await response.json();
                        setUpdate(!update);
                    }}
                >
                    <Text style={styles.clockBtnText}>{log.length %2 === 0 ? "Clock-in" : "Clock-out"}</Text>
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
            {hoursPage ? <Hours hours={log}/> : <></>}
        </>
    );
}

export function Hours(props:{hours:MyWorkLog[]}) {

    function renderLog(log:MyWorkLog){
        return(
            <View style={{flexDirection:"row", backgroundColor:"#fff", justifyContent:"space-between"}}>
                <Text>{log.timestamp}</Text>
                <Text>{log.action}</Text>
            </View>
        )
    }

    return <View style={styles.hours}>
        <FlatList data={props.hours} renderItem={({item}) => renderLog(item)} keyExtractor={item => item.id.toString()}/>
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
    }
});
