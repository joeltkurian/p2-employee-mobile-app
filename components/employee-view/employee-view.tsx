import { getArchtype } from "immer/dist/internal";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Employee } from "../../dtos";


export default function EmployeeView() {

    const defaultEmps:Employee[] = [
        {
            "username": "",
            "password":"",
            "fname": "",
            "lname": "",
            "isManager": false,
            "id": 0
        }
    ]
    const [employees, setEmployees] = useState()

    const [workLogs, setWorkLogs] = useState([
        {
            id:0,
            timestamp:'',
            employeeId:0,
            action:'ABSENT'
        }
    ])

    async function getEmployees(){
        const response = await fetch('http://20.121.74.219:3000/employees')
        const emps = await response.json();
        setEmployees(emps);
        
    }

    async function getTimeSheets(){
        const response = await fetch('http://20.121.74.219:3000/worklogs')
        const logs = await response.json();
        setWorkLogs(logs);
        
    }

    function getStatus(emp:Employee){
        let status = 'ABSENT'
        let b:Boolean = true;
        let i = workLogs.length-1;
        while(b && i >= 0){
            if(emp.id === workLogs[i].employeeId){
                status = workLogs[i].action;
                b = false;
            } else {
                
            }
            i--;
        }
        
        return status;
    }

    useEffect(()=>{
        getEmployees();
        getTimeSheets();
    },[])

    return (<View style={styles.container}>
        <FlatList
            data={employees}
            renderItem={({ item }) => (
                <View style={styles.flatlist}>
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.fname} {item.lname}</Text>
                        <Text/>
                        {getStatus(item) === "ABSENT" ? 
                            <Text style={{textAlign: 'justify', color: 'red'}}>Status: {getStatus(item)}</Text>
                        : getStatus(item) === "CHECKIN" ? 
                            <Text style={{textAlign: 'justify', color: 'green'}}>Status: {getStatus(item)}</Text>
                            : <Text style={{textAlign: 'justify', color: 'blue'}}>Status: {getStatus(item)}</Text>
                        
                        }
                        
                    </View>
                </View>
            )}
        />

    </View>);
}

const styles = StyleSheet.create({
container: {
    paddingTop:25, 
    justifyContent: 'center',
    padding: 6,
    height: '85%',
    width: '95%'
},
flatlist: {
    paddingHorizontal: 10,
    backgroundColor: 'rgba(106, 176, 7, .3)', 
    height:120
},
item: {
    backgroundColor: 'rgba(206, 176, 7, .7)', 
    height:80
},
text: {
    textAlign: 'center',
    fontSize:25,
},
status: {
    textAlign: 'justify'
},
})