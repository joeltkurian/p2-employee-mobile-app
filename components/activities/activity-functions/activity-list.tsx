import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { View, Text, Pressable, StyleSheet } from "react-native";
import { dummyData } from '../../dummy-data/dummy'
import { useState } from 'react';
import { Activity, defaultActivity } from '../../../dtos';
import ActivityDetails from './activity-details';

interface ActivityProps {

}


export default function ActivitiesList() {
    const [activity, setSeeMore] = useState<Activity>(defaultActivity);
    function handleSeeMore(activity: Activity) {
        setSeeMore(activity);
    }
    const activitiesCard = (params: any) => {
        const activity: Activity = params.item;
        // console.log(activity);
        return (<>
            <Pressable style={styles.pressableCard} onPress={() => { handleSeeMore(activity); }}>
                <Card containerStyle={styles.card}>

                    <Text style={styles.info}>Title :  {activity.title} </Text>
                    <Text style={styles.info}>Status :  {activity.status} </Text>
                    <Text style={styles.info}>Start Time :  {activity.startTime} </Text>
                </Card>
            </Pressable>
        </>);
    }
    if (activity.id === "") {
        return (
            <View style={styles.view}>
                <FlatList data={dummyData} renderItem={activitiesCard} />
            </View>
        )
    } else {
        return (<>
            <ActivityDetails activity={activity} setSeeMore={setSeeMore} />
        </>)
    }

}
const styles = StyleSheet.create({
    info: {
        fontSize: 20,
        alignSelf: 'center',
        fontStyle: 'italic',
    },
    view: {
        alignItems: 'center',
        height: '97%',
        width: '100%',
    },
    pressableCard: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    card: {
        backgroundColor: '#FCBA04',
        borderColor: '#B68602',
        borderWidth: 5,
        borderRadius: 10,
        width: '100%',
    },
});
