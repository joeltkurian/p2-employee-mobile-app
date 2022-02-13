import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { borderColor, paddingColor } from "../../styling";
import ProblemsList from "./problems-list/problems-list";
import { useDispatch, useSelector } from "react-redux";
import { getAllProblems } from "../../store/actions";
import { AppState } from "../../store/store";
import problemService from "../../service/problem-service";

export default function ProblemsPage() {
    const dispatch = useDispatch();
    const problemsList = useSelector((state: AppState) => state.problems);

    useEffect(() => {
        problemService.getAllProblems().then(response => dispatch(getAllProblems(response)));
    }, [])

    return (<View style={styles.totalProblem}>
        <View style={styles.problemContainer}>
            <ProblemsList problemList={problemsList} />
        </View>
    </View>);
}

const styles = StyleSheet.create({
    totalProblem: {
        marginTop: '38%',
        width: '100%',
        height: '100%',
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
    }
});
