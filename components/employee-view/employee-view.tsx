import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Employee } from "../../dtos";
import { borderColor, mainBackgroundColor } from "../../styling";


export default function EmployeeView() {

    const defaultEmps: Employee[] = [
        {
            "username": "",
            "password": "",
            "fname": "",
            "lname": "",
            "isManager": false,
            "id": 0
        }
    ]
    const [employees, setEmployees] = useState()

    const [workLogs, setWorkLogs] = useState([
        {
            id: 0,
            timestamp: '',
            employeeId: 0,
            action: 'ABSENT'
        }
    ])

    async function getEmployees() {
        const response = await fetch('http://20.121.74.219:3000/employees')
        const emps = await response.json();
        setEmployees(emps);

    }

    async function getTimeSheets() {
        const response = await fetch('http://20.121.74.219:3000/worklogs')
        const logs = await response.json();
        setWorkLogs(logs);

    }

    function getStatus(emp: Employee) {
        let status = 'MANAGER'
        let b: Boolean = true;
        let i = workLogs.length - 1;
        while (b && i >= 0) {
            if (emp.id === workLogs[i].employeeId) {
                status = workLogs[i].action;
                b = false;
            } else {

            }
            i--;
        }

        if (status === "CHECKIN") status = "Checked In"
        if (status === "CHECKOUT") status = "Checked Out"

        return status;
    }

    useEffect(() => {
        getEmployees();
        getTimeSheets();
    }, [])

    return (<View style={styles.container}>
        <FlatList
            data={employees}
            renderItem={({ item }) => (
                <View style={styles.flatlist}>
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.fname} {item.lname}</Text>
                        <Text />
                        <View style={styles.border} />
                        <View style={{ alignItems: 'center' }}>
                            {getStatus(item) === "MANAGER" ?
                                <Text style={{ textAlign: 'justify', color: 'red' }}>Status: {getStatus(item)}</Text>
                                : getStatus(item) === "Checked In" ?
                                    <Text style={{ textAlign: 'justify', color: 'green' }}>Status: {getStatus(item)}</Text>
                                    : <Text style={{ textAlign: 'justify', color: 'blue' }}>Status: {getStatus(item)}</Text>

                            }
                        </View>

                    </View>
                </View>
            )}
        />

    </View>);
}

const styles = StyleSheet.create({
    container: {
        paddingTop: "15%",
        justifyContent: 'center',
        padding: 10,
        height: '85%',
        width: '95%'
    },
    flatlist: {
        padding: 20,
    },
    border: {
        borderWidth: 1,
        width: '100%',
        borderColor: '#000',
    },
    item: {
        backgroundColor: mainBackgroundColor,
        borderColor: borderColor,
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 10,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
    },
    status: {
        fontSize: 20,
        textAlign: 'center'
    },
})