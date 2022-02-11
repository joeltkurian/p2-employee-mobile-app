import { Card } from 'react-native-elements';
import { View, Text, Pressable, ImageBackground, StyleSheet, FlatList } from "react-native";
import { Problem } from '../../../dtos';
import { formatted_date } from '../../../userContext';
import { loginBtn, loginBtnActive } from '../../../styling';
import { useDispatch } from 'react-redux';
import problemService from '../../../service/problem-service';
import { getAllProblems } from '../../../store/actions';
import { useEffect, useState } from 'react';

interface ProblemsProps {
    problemList: Problem[];
}

export default function ProblemsList({ problemList }: ProblemsProps) {
    const [problems, setProblems] = useState(problemList);
    const dispatch = useDispatch();

    function markReviewed(id: string) {
        problemService.reviewProblem(id).then((response) => {
            problemService.getAllProblems().then((response) => {
                dispatch(getAllProblems(response));
            })
        })
    }

    useEffect(() => {
        let sortedArr: Problem[] = [];
        problemList.map(problem => {
            if (problem.status === "Unreviewed") {
                sortedArr.push(problem);
            }
        })
        problemList.map(problem => {
            if (problem.status === "Reviewed") {
                sortedArr.push(problem);
            }
        })
        setProblems(sortedArr);
    }, [problemList]);


    const problemsCard = (params: any) => {
        return (<>
            <Card containerStyle={params.item.status === "Unreviewed" ? styles.card : styles.revcard}>
                <View style={styles.infoReservationView}>
                    <Text style={styles.infoReservation}>
                        {params.item.desc}
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
                            {formatted_date(params.item.submittedTime)}
                        </Text>
                    </View>
                </View>
            </Card>
            {params.item.status === "Unreviewed" ?
                <View style={styles.reviewView}>
                    <Pressable onPress={() => { markReviewed(params.item.id) }}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? loginBtnActive
                                    : loginBtn
                            },
                            styles.reviewBTN]} >
                        <Text style={styles.reviewTxt}>Mark as Reviewed</Text>
                    </Pressable>
                </View> : <></>
            }
        </>);
    }

    return (
        <View style={styles.view}>
            <FlatList data={problems} renderItem={problemsCard} />
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
    reviewView: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    reviewBTN: {
        borderRadius: 8,
        margin: 8,
        padding: 5,
        elevation: 5,
    },
    reviewTxt: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
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
    revcard: {
        backgroundColor: '#BBBBBB',
        borderColor: '#525252',
        opacity: 0.4,
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
        marginTop: 5,
        width: 120,
        height: 120,
        marginLeft: 0,
        marginRight: 5,
    }
});
