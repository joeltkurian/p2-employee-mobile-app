import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { ServiceRequest, Offering, Offerings } from "../../dtos";
import { borderColor, loginBtn, loginBtnActive, mainBackgroundColor, textColor } from "../../styling";

export default function RoomService() {

    const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([]);
    const [updateBtn, setupdateBtn] = useState(false);

    async function updateStatus(request: ServiceRequest) {
        const temp = serviceRequests;
        if (request.status === "Ordered") {
            for (let i = 0; i < serviceRequests.length; i++) {
                if (temp[i].id === request.id) {
                    const action = {status:"Processing"}
                    const response = await fetch('http://20.121.74.219:3000/servicerequests/'+request.id,{
                        method:"PATCH",
                        body:JSON.stringify(action),
                        headers:{
                            'content-type': 'application/json',
                            'Accept': 'application/json'
                        }
                    })
                }
            }
            setupdateBtn(!updateBtn);
        }
        else if (request.status === "Processing") {
            for (let i = 0; i < serviceRequests.length; i++) {
                if (temp[i].id === request.id) {
                    const action = {status:"Completed"}
                    const response = await fetch('http://20.121.74.219:3000/servicerequests/'+request.id,{
                        method:"PATCH",
                        body:JSON.stringify(action),
                        headers:{
                            'content-type': 'application/json',
                            'Accept': 'application/json'
                        }
                    })                    
                }
            }
            setupdateBtn(!updateBtn);
        }
        else{
            alert("Something went wrong");
        }
    }

    useEffect(() => {
        (async()=>{
            const response = await fetch('http://20.121.74.219:3000/servicerequests');
            const fullList:ServiceRequest[] = await response.json();
            const openRequests = filterAndSort(fullList)
            setServiceRequests(openRequests);})();
    }, [updateBtn]);


    return (<View style={styles.total}>
        <View style={styles.welcome}>
            <Text style={styles.welcomeText}>ALL SERVICES</Text>
        </View>
        <View style={styles.serviceView}>
            <FlatList data={serviceRequests} keyExtractor={item => item.id} renderItem={({ item }) => (
                <>
                    <RendarTitle item={item} updateStatus={updateStatus} />
                    <RendarContent section={item} />
                </>
            )} />
        </View>
    </View>)

}

const styles = StyleSheet.create({
    total: {
        marginTop: '15%',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {

        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
        borderWidth: 1,
        borderColor: borderColor,
        backgroundColor: mainBackgroundColor,
    },
    welcomeText: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    serviceView: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
        width: '80%',
        borderWidth: 1,
        borderColor: borderColor,
        backgroundColor: mainBackgroundColor,
    },
    detailsBtn: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        margin: 8,
        padding: 5,
        elevation: 5,
    },

    text: {
        color: textColor,
        fontWeight: 'bold',
        fontSize: 15,
    },
    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    infoIdStat: {
        flexDirection: "column",
        marginRight: 35,
    }
});

export function RendarTitle(props: { item: ServiceRequest, updateStatus: Function }) {
    const { item, updateStatus } = props;
    return (
        <View style={styles.info}>
            <View style={styles.infoIdStat}>
                <Text>Room#: {item.room}</Text>
                <Text>Status: {item.status}</Text>
            </View>
            <Pressable onPress={() => updateStatus(item)} style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? loginBtnActive
                        : loginBtn
                },
                styles.detailsBtn
            ]}>
                <Text>
                    {item.status === 'Ordered' ?
                        "Process Order"
                        :
                        "Complete Order"
                    }
                </Text>
            </Pressable>
        </View>
    )
}

function convert(off: Offering[]): Offerings {
    let cart: Offerings = { items: [], quantities: [] };

    for (const i of off) {
        const index = cart.items.findIndex(c => c.desc === i.desc)
        if (index != -1) {
            cart.quantities[index] += 1;
        } else {
            cart.items.push(i);
            cart.quantities.push(1);
        }
    }
    return cart;
}

export function RendarContent(props: { section: ServiceRequest }) {
    const [details, setDetails] = useState(false);
    const { section } = props;
    const cart = convert(section.requestedOfferings);
    function renderItem(props: { offering: Offering, quantity: number }) {
        const [title, desc] = props.offering.desc.split('*');
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text>{title}</Text>
                <Text>x{props.quantity}     ${(props.offering.cost * props.quantity).toFixed(2)}</Text>
            </View>
        )
    }
    return (
        details ?
            section.status === "Ordered" || "Processing" ?
                <Pressable onPress={() => setDetails(false)} style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? loginBtnActive
                            : loginBtn
                    },
                    styles.detailsBtn
                ]}>
                    <FlatList data={cart.items} renderItem={({ item, index }) => renderItem({ offering: item, quantity: cart.quantities[index] })} keyExtractor={item => item.desc} />
                </Pressable>
                : <></>
            :
            <Pressable onPress={() => setDetails(true)} style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? loginBtnActive
                        : loginBtn
                },
                styles.detailsBtn
            ]}>
                <Text style={styles.text}>Order Details</Text>
            </Pressable>
    )
}

function filterAndSort(fullList: ServiceRequest[]): ServiceRequest[] {
    const filteredCancel = fullList.filter(serviceRequest => serviceRequest.status !== "Cancel");
    const openRequests = filteredCancel.filter(serviceRequest => serviceRequest.status !== 'Completed');
    const sorted = openRequests.sort((a, b) => a.created < b.created ? -1 : a.created > b.created ? 1 : 0);
    return sorted;
}