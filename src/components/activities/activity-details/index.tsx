import { Pressable, View, Text, Image } from "react-native"
import { dummyLocation } from "../dummy-data/dummy";
import styles from './styles';


export default function ActivityDetails(){


    function cancelActivity(){

    }

    function createActivity(){

    }

    function activityList(){

    }

    // D&D beyond app, image top, local, title, times, desc

    return(
    <View style={styles.background}>
        <View style={styles.buttonDiv}>
            <Pressable onPress={()=>{}} style={styles.buttonA}><Text style={styles.buttonText}>All Activities</Text></Pressable>
            <Pressable onPress={()=>{}} style={styles.buttonB}><Text style={styles.buttonText}>New Activity</Text></Pressable>
        </View>

        <View style={styles.display}>

            <View style={styles.tHead}>
                <Text style={styles.h1}>
                    Title : EDM Dance
                </Text>
            </View>

            <Image style={styles.image} source={{uri:dummyLocation.find(location => location.value == 5)?.imageLink}}/>
            
            <View style={styles.local}>
                <Text style={styles.h4}>
                    Location : {dummyLocation.find(location => location.value == 5)?.label}
                </Text>
            </View>            

            <View style={styles.times}>
                <View>
                    <Text style={styles.h3}>
                        Start Time : 9:00
                    </Text>
                </View>

                <View>
                    <Text style={styles.h3}>
                        End Time : 1:00
                    </Text>
                </View>
            </View>

            <View style={styles.desc}>
                <Text style={styles.h2}>
                    Description :
                </Text>
            
                <Text style={styles.p}>
                    Description details, John is a man of focus, commitment, this is where we repeat to see
                    just how much text gets displayed in the window/box. blah blah blah, mumbo jumbo twister
                    thinksing of typing ron swansons favorite words, steak, wood, the one that not appropriate
                    yada yada yada dfa;lsdkfgh;alsdkfjhg;lkadjsfhg;alsdkhgj;alsdfikjghy;alkdjrnhgkejr gbliut b
                    adsufghloaijskdfgbnl;iaudsfhg;alksndfgb;'oaidfjb'paoetfrjmkb'padofjnb'poiadsfjn'
                    adsfiuerinudfvoiundfsvlkmikldfbghiopudfgklmsdfbkljdfsboifdgjl;k'fdhsopjfds
                </Text>
            </View>

        </View>

        <View style={styles.buttonDiv}>
            <Pressable style={styles.buttonC} onPress={()=>{}}><Text style={styles.buttonText}>Cancel</Text></Pressable>
        </View>
    </View>
    )
}