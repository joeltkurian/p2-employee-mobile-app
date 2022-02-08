import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { TextInput, View, Text, Pressable, ScrollView } from "react-native";
import { Activity } from '../../../../dtos'
import { dummyData } from '../../dummy-data/dummy'
import styles from './styles';

interface ActivityProps{

}

export default function ActivitiesList(props: ActivityProps){


    function handleSeeMore(){

    }


    const activitiesCard = (params: any) => {
        console.log(params)
    return(
    <Pressable onPress={()=>{}}>
        
        <Card containerStyle={styles.card}>
        
            <Text style={styles.info}>
                Title :  {params.item.title}
            </Text>
            <Text style={styles.info}>
                Status :  {params.item.status}
            </Text>
            <Text style={styles.info}>
                Start Time :  {params.item.startTime}
            </Text>
            
        </Card>
        
    </Pressable>
    )}

    return(
    <View style={styles.view}>

        <View style={styles.buttonDiv}>
            <Pressable onPress={()=>{}} style={styles.buttonA}><Text style={styles.buttonText}>All Activities</Text></Pressable>
            <Pressable onPress={()=>{}} style={styles.buttonB}><Text style={styles.buttonText}>New Activity</Text></Pressable>
        </View>

        <View>
            <FlatList data={dummyData} renderItem={activitiesCard}/>
        </View>

    </View>
    )

}