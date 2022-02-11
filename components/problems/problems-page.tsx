import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { borderColor, loginBtn, loginBtnActive, paddingColor, textColor } from "../../styling";
import ProblemsList from "./problems-list/problems-list";
import { Problem, defaultProblem } from '../../dtos';
import { useDispatch, useSelector } from "react-redux";
import { getAllProblems } from "../../store/actions";
import { AppState } from "../../store/store";
import problemService from "../../service/problem-service";
import ProblemDetails from './problems-details/problem-details'

export default function ProblemsPage() {
    const [problemDetails, setProblemDetails] = useState<Problem>(defaultProblem);
    const dispatch = useDispatch();
    const problemsList = useSelector((state: AppState) => state.problems);

    useEffect(()=> {
        problemService.getAllProblems().then(response => dispatch(getAllProblems(response)))
    },[])

    return (<View style={styles.totalProblem}>
        <View style={styles.buttonContainer}>
            <Pressable onPress={() => {setProblemDetails(defaultProblem)}}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? loginBtnActive
                            : loginBtn
                    },
                    styles.clockBTN
                ]}><Text style={styles.clockBtnText}>All Problems</Text></Pressable>
        </View>
        <View style={styles.problemContainer}>
            <ProblemsList problemDetails={problemDetails} setProblemDetails={setProblemDetails} problemList={problemsList}/>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    totalProblem: {
        marginTop: '38%',
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        marginLeft: '30%',
        flexDirection: 'row',
    },
    problemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '80%',
    },
    hours: {
        backgroundColor: paddingColor,
        borderColor: borderColor,
        borderWidth: 1,
        borderRadius: 10,
        bottom: '1%',
        width: '90%',
        height: '60%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    clockBTN: {
        margin: 5,
        borderRadius: 8,

        padding: 4,
    },
    clockBtnText: {
        textAlign: 'center',
        color: textColor,
        fontWeight: 'bold',
        fontSize: 20,
    }
});