import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { ServiceRequest } from "./dtos";

export default function RoomService(){

    const [serviceRequests,setServiceRequests] = useState<ServiceRequest[]>([]);

    const dummy:ServiceRequest[] = [
        {id: "001", room: "101", created: 1000, status: "Ordered", requestedOffering: [
            {desc:"Steak*Lorem Ipsum about Steak",cost:25.30},
            {desc:"Soup*Lorem Ipsum about Steak",cost:25.30},
            {desc:"Beef Wellington*Lorem Ipsum about Beef Wellington Lorem Ipsum about Beef Wellington Lorem Ipsum about Beef Wellington Lorem Ipsum about Beef Wellington Lorem Ipsum about Beef Wellington ",cost:25.30},
            {desc:"Scotched Egg*Lorem Ipsum about Scotched Eggs",cost:25.30},
            {desc:"Steak*Lorem Ipsum about Steak",cost:25.30},
            {desc:"Steak*Lorem Ipsum about Steak",cost:25.30},
        ]},
        {id: "002", room: "102", created: 2000, status: "Processing", requestedOffering: [
            {desc:"Steak*Lorem Ipsum about Steak",cost:25.30},
            {desc:"Steak*Lorem Ipsum about Steak",cost:25.30},
            {desc:"Steak*Lorem Ipsum about Steak",cost:25.30},
        ]},
        {id: "003", room: "103", created: 3000, status: "Completed", requestedOffering: [
            {desc:"Steak*Lorem Ipsum about Steak",cost:25.30},
            {desc:"Soup*Lorem Ipsum about Steak",cost:25.30},
        ]},
        {id: "004", room: "201", created: 4000, status: "Cancelled", requestedOffering: [
            {desc:"Scotched Egg*Lorem Ipsum about Scotched Eggs",cost:25.30},
            {desc:"Steak*Lorem Ipsum about Steak",cost:25.30},
        ]},
        {id: "005", room: "202", created: 5000, status: "Ordered", requestedOffering: [
            {desc:"Steak*Lorem Ipsum about Steak",cost:25.30},
            {desc:"Soup*Lorem Ipsum about Steak",cost:25.30},
            {desc:"Scotched Egg*Lorem Ipsum about Scotched Eggs",cost:25.30},
            {desc:"Steak*Lorem Ipsum about Steak",cost:25.30},
        ]},
        {id: "006", room: "203", created: 6000, status: "Ordered", requestedOffering: [
            {desc:"Soup*Lorem Ipsum about Steak",cost:25.30},
        ]},
        {id: "007", room: "301", created: 7000, status: "Ordered", requestedOffering: [
            {desc:"Soup*Lorem Ipsum about Steak",cost:25.30},
        ]},
        {id: "008", room: "302", created: 8000, status: "Ordered", requestedOffering: [
            {desc:"Beef Wellington*Lorem Ipsum about Beef Wellington",cost:25.30},
        ]},
    ];

    function filterAndSort(fullList:ServiceRequest[]):ServiceRequest[]{
        return [{id: "001", room: "101", created: 1000, status: "Ordered", requestedOffering: []}]
    }

    function renderItem(serviceRequest:ServiceRequest){
        return(<View>
            <Text>New Item</Text>
        </View>)
    }

    useEffect(()=>{

    },[serviceRequests]);

    return(
        <View>
            <Text>Room Service Component</Text>
            <Text>List of Requests</Text>
            <FlatList data={dummy} renderItem={({ item }) => renderItem( item )} keyExtractor={item => item.id}/>
        </View>
    )
}