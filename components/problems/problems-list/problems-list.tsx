import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { View, Text, Pressable, ImageBackground, StyleSheet } from "react-native";
import { dummyProblems } from '../../dummy-data/dummy';
import { Problem } from '../../../dtos';
import ProblemDetails from '../problems-details/problem-details'

interface ProblemsProps {
    problemDetails: Problem;
    setProblemDetails:(problem: Problem)=> void;
    problemList: Problem[];
}

export default function ProblemsList({problemDetails, setProblemDetails, problemList}: ProblemsProps) {

    function handleSeeMore(problem: Problem) {
        setProblemDetails(problem);
    }

    const problemsCard = (params: any) => {
        return (
            <Pressable style={styles.pressableCard} onPress={() => { handleSeeMore(problemDetails); }}>
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
                                <ImageBackground source={{ uri: params.item.photoLink }} style={styles.problemPhoto} /> : <></>
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
    if (problemDetails.id === "") {
        return (
            <View style={styles.view}>
                <FlatList data={problemList} renderItem={problemsCard} />
            </View>
        )
    } else {
        return (<>
            <ProblemDetails problemDetails={problemDetails} setProblemDetails={setProblemDetails} />
        </>)
    }

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
    pressableCard: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    insideCard: {
        flexDirection: 'row',

    },
    textCard: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    problemPhoto: {
        top: '-5%',
        width: 120,
        height: 120,
        marginLeft: 0,
        marginRight: 5,
    }
});