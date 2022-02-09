import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { View, Text, Pressable, ImageBackground, StyleSheet } from "react-native";
import { dummyComplaints } from '../../dummy-data/dummy';

interface ProblemsProps {

}

export default function ComplaintsList(props: ProblemsProps) {

    function handleSeeMore() {

    }


    const complaintsCard = (params: any) => {
        return (
            <Pressable onPress={() => { }}>
                <Card containerStyle={styles.card}>
                    <View style={styles.infoReservationView}>
                        <Text style={styles.infoReservation}>
                            {params.item.id}
                        </Text>
                        <View style={styles.border} />
                    </View>
                    <View style={styles.insideCard}>
                        {
                            params.item.photoLink ?
                                <ImageBackground source={{ uri: params.item.photoLink }} style={styles.complaintPhoto} /> : <></>
                        }
                        <View style={styles.textCard}>
                            <Text style={styles.info}>
                                Status : {params.item.status}
                            </Text>
                            <Text style={styles.info}>
                                Time Submitted : {params.item.submittedTime}
                            </Text>
                        </View>
                    </View>
                </Card>
            </Pressable>
        )
    }

    return (
        <View style={styles.view}>
            <View>
                <FlatList data={dummyComplaints} renderItem={complaintsCard} />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    info: {
        fontSize: 18,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    infoReservation: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    infoReservationView: {
        flexDirection: 'column',
        overflow: 'hidden',
    },
    border: {
        borderWidth: 1,
        width: '100%',
        borderColor: '#000',
    },
    view: {
        marginTop: '20%',
        height: '90%',
        width: '96%',
    },
    card: {
        backgroundColor: '#FCBA04',
        borderColor: '#B68602',
        borderWidth: 5,
        padding: 10,
        borderRadius: 10,
    },
    insideCard: {
        flexDirection: 'row',

    },
    textCard: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    complaintPhoto: {
        top: '-5%',
        width: 120,
        height: 120,
        marginLeft: 0,
        marginRight: 5,
    }
});