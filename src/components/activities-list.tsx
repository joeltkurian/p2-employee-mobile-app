import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { TextInput, View, Text, Pressable, ScrollView } from "react-native";
import { Activity } from '../../dtos'
import { dummyData } from '../dummy-data/dummy'

interface ActivityProps{

}

export default function ActivitiesList(props: ActivityProps){


    function handleSeeMore(){

    }


    const activitiesCard = (params: any) => {
        console.log(params)
    return(
    <Pressable onPress={()=>{}}>
        <Card>
            <Text>
                Title {params.item.title}
            </Text>
            <Text>
                Status {params.item.status}
            </Text>
            <Text>
                Start Time {params.item.startTime}
            </Text>
        </Card>
    </Pressable>
    )}

    return(
        <View>
            <FlatList data={dummyData} renderItem={activitiesCard}/>
        </View>
    )

}