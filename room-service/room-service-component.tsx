import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import Accordion from 'react-native-collapsible/Accordion';
import { ServiceRequest, Offering, Offerings } from "./dtos";

export default function RoomService(){

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

    const [serviceRequests,setServiceRequests] = useState<ServiceRequest[]>(filterAndSort(dummy));
    const [activeSections, updateSections] = useState([]);
    const [updateBtn, setupdateBtn]= useState(false);
    let local:ServiceRequest[] = [];

    

    function filterAndSort(fullList:ServiceRequest[]):ServiceRequest[]{
        const filteredCancel = fullList.filter(serviceRequest => serviceRequest.status !== "Cancelled");
        const openRequests = filteredCancel.filter(serviceRequest => serviceRequest.status !== 'Completed');
        const sorted = openRequests.sort((a,b) => a.created < b.created ? -1 : a.created > b.created ? 1 : 0);
        return sorted;
    }

    function updateStatus(request:ServiceRequest){
        
        const temp = serviceRequests;
        if(request.status === "Ordered"){
            for(let i = 0; i < serviceRequests.length; i++){
                if(temp[i].id === request.id){
                    temp[i].status = 'Processing'
                    setServiceRequests(temp);
                    local = temp;
                }
            }
            setupdateBtn(true);
        }
        else if(request.status === 'Processing'){
            for(let i = 0; i < serviceRequests.length; i++){
                if(temp[i].id === request.id){
                    temp[i].status = 'Completed';
                    temp.splice(i,1);
                    setServiceRequests(temp);
                    local = temp;
                }
            }
            setupdateBtn(true);
        }
        
    }

    useEffect(()=>{
        setServiceRequests(filterAndSort(serviceRequests));
        setupdateBtn(false);
    },[updateBtn]);

    function renderTitle(section:ServiceRequest){
        return(
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                <Text>{section.id}</Text>
                <Text>{section.status}</Text>
                <Button onPress={() => updateStatus(section)} title={section.status === 'Ordered'?"Process Order":"Complete Order"}/>
            </View>
        );
    }

    function renderHeader(section:ServiceRequest){
        return(
            <View style={{alignItems:"center"}}>
                <Text>Order Details</Text>
            </View>
        )
    }

    function renderContent(section:ServiceRequest){
        const cart = convert(section.requestedOffering);
        function renderItem(props: { offering: Offering, quantity: number }){
            const [title, desc] = props.offering.desc.split('*');
            return(
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text>{title}</Text>
                    <Text>x{props.quantity}     ${(props.offering.cost*props.quantity).toFixed(2)}</Text>
                </View>
            )
        }
        return(
            <View>
                <FlatList data={cart.items} renderItem={({item,index}) => renderItem({offering:item, quantity:cart.quantities[index]})} keyExtractor={item => item.desc}/>
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

    return(
        <View style={{alignItems:"center", padding:2, flexDirection:"column"}}>
            <Text>Room Service Component</Text>
            <Text>List of Requests</Text>
            <View>
            <Accordion activeSections={activeSections} sections={serviceRequests} renderSectionTitle={renderTitle} renderHeader={renderHeader} renderContent={renderContent} onChange={(section: any) => { updateSections(section) }} expandMultiple={false}/>
            </View>
        </View>
    )
}

export function DefUpdateBtn(prop:{updateBtn:Function}){
    prop.updateBtn(true);
}