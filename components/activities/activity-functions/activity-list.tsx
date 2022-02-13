import { Card } from 'react-native-elements';
import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import { Activity } from '../../../dtos';
import ActivityDetails from './activity-details';

interface ActivityProps {
    activityDetails: Activity;
    setActivityDetails: (activity: Activity) => void;
    activityList: Activity[];
}


export default function ActivitiesList({ activityDetails, setActivityDetails, activityList }: ActivityProps) {

    function handleSeeMore(activity: Activity) {
        setActivityDetails(activity);
    }

    let sortedArr: Activity[] = [];

    activityList.map(activity => {
        if (activity.status === "On Schedule") {
            sortedArr.push(activity)
        }
    })
    activityList.map(activity => {
        if (activity.status === "Cancelled") {
            sortedArr.push(activity)
        }
    })

    const activitiesCard = (params: any) => {
        const activity: Activity = params.item;
        if (activity.status !== "Cancelled") {
            return (<>
                <Pressable style={styles.pressableCard} onPress={() => { handleSeeMore(activity); }}>
                    <Card containerStyle={styles.card}>

                        <Text style={styles.info}>Title :  {activity.title} </Text>
                        <Text style={styles.info}>Status :  {activity.status} </Text>
                        <Text style={styles.info}>Start Time :  {activity.startTime} </Text>

                    </Card>
                </Pressable>
            </>);
        } else {
            return (<>
                <Pressable style={styles.pressableCard}>
                    <Card containerStyle={styles.cardCancelled}>

                        <Text style={styles.info}>Title :  {activity.title} </Text>
                        <Text style={styles.info}>Status :  {activity.status} </Text>
                        <Text style={styles.info}>Start Time :  {activity.startTime} </Text>

                    </Card>
                </Pressable>
            </>);
        }
    }
    if (activityDetails.id === "") {
        return (
            <View style={styles.view}>
                <FlatList data={sortedArr} renderItem={activitiesCard} />
            </View>
        )
    } else {
        return (<>
            <ActivityDetails activity={activityDetails} setSeeMore={setActivityDetails} />
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
    cardCancelled: {
        backgroundColor: '#BBBBBB',
        borderColor: '#525252',
        opacity: 0.4,
        borderWidth: 5,
        borderRadius: 10,
        width: '100%',
    },
});
