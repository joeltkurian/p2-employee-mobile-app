import { Pressable, View, Text, ImageBackground, StyleSheet } from "react-native"
import { useDispatch } from "react-redux";
import { Problem, defaultProblem } from "../../../dtos";
import problemService from "../../../service/problem-service";
import { getAllProblems } from "../../../store/actions";
import { borderColor, loginBtn, loginBtnActive, mainBackgroundColor } from "../../../styling";
import styles from './styles'

interface ProblemsProps {
    problemDetails: Problem;
    setProblemDetails:(problem: Problem)=> void;
}

export default function ProblemsDetails({problemDetails, setProblemDetails}: ProblemsProps) {

    const dispatch = useDispatch();

    function changeStatus() {
        problemService.reviewProblem(problemDetails.id).then((response)=>{
            problemService.getAllProblems().then((response)=>{
                dispatch(getAllProblems(response))
            })
        })
        setProblemDetails(defaultProblem);
    }

    return (
        <View style={styles.background}>

            <View style={styles.display}>

                <View style={styles.tHead}>
                    <Text style={styles.h1}>
                        Room #
                    </Text>
                </View>

                {/* <Image style={styles.image} source={{uri:dummyLocation.find(location => location.value == 5)?.imageLink}}/> */}

                <View style={styles.status}>
                    <Text style={styles.h2}>
                        {/* Location : {dummyLocation.find(location => location.value == 5)?.label} */}
                        Current Status : {problemDetails.status}
                    </Text>
                </View>

                <View style={styles.submittedTime}>
                    <View>
                        <Text style={styles.h3}>
                            Time Submitted : {problemDetails.submittedTime}
                        </Text>
                    </View>
                </View>

                <View style={styles.desc}>
                    <Text style={styles.h2}>
                        Description : 
                    </Text>

                    <Text style={styles.p}>
                        {problemDetails.desc}
                    </Text>
                </View>

            </View>

            <View style={styles.buttonDiv}>
                <Pressable style={styles.buttonC} onPress={() => {changeStatus}}><Text style={styles.buttonText}>Mark as Reviewed</Text></Pressable>
            </View>
        </View>
    )
}