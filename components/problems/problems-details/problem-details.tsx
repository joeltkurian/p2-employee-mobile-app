import { Pressable, View, Text } from "react-native";
import styles from './styles';

interface ProblemsProps {

}

export default function ProblemsDetails(props: ProblemsProps) {

    function changeStatus() {

    }

    return (
        <View style={styles.background}>
            <View style={styles.buttonDiv}>
                <Pressable onPress={() => { }} style={styles.buttonA}><Text style={styles.buttonText}>All Problems</Text></Pressable>
            </View>

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
                        Current Status : Unreviewed
                    </Text>
                </View>

                <View style={styles.submittedTime}>
                    <View>
                        <Text style={styles.h3}>
                            Time Submitted : 9:00
                        </Text>
                    </View>
                </View>

                <View style={styles.desc}>
                    <Text style={styles.h2}>
                        Description :
                    </Text>

                    <Text style={styles.p}>
                        Description details, John is a man of focus, commitment, this is where we repeat to see
                        just how much text gets displayed in the window/box. blah blah blah,
                    </Text>
                </View>

            </View>

            <View style={styles.buttonDiv}>
                <Pressable style={styles.buttonC} onPress={() => { }}><Text style={styles.buttonText}>Mark as Reviewed</Text></Pressable>
            </View>
        </View>
    )
}