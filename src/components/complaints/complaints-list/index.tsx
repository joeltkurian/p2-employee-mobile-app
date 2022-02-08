import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { View, Text, Pressable } from "react-native";
import { Problem } from '../../../../dtos'
import { dummyComplaints } from '../../dummy-data/dummy'
import styles from './styles';

interface ProblemsProps{

}

export default function ComplaintsList(props: ProblemsProps){


    function handleSeeMore(){

    }


    const complaintsCard = (params: any) => {
    return(
        <Pressable onPress={()=>{}}>
            
            <Card containerStyle={styles.card}>
            
                <Text style={styles.info}>
                    {params.item.id}
                </Text>

                <Text style={styles.info}>
                    Status : {params.item.status}
                </Text>

                <Text style={styles.info}>
                    Time Submitted : {params.item.submittedTime}
                </Text>
    
            </Card>
            
        </Pressable>
    )}

    return(
    <View style={styles.view}>

        <View style={styles.buttonDiv}>
            <Pressable onPress={()=>{}} style={styles.buttonA}><Text style={styles.buttonText}>All Complaints</Text></Pressable>
        </View>

        <View>
            <FlatList data={dummyComplaints} renderItem={complaintsCard}/>
        </View>

    </View>
    )

}