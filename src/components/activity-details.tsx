import { Pressable, View, Text, Image } from "react-native"



export default function ActivityDetails(){


    function cancelActivity(){

    }

    function createActivity(){

    }

    function activityList(){

    }

    return(
    <View>
        <View>
            <Pressable onPress={()=>{}}><Text>All Activities</Text></Pressable>
            <Pressable onPress={()=>{}}><Text>New Activity</Text></Pressable>
        </View>

        <View>
            <Text>
                Title
            </Text>
        </View>

        <View>
            {/* <Image/> */}
            <Text>
                Location
            </Text>
        </View>
        <View>
            <Text>
                Description
            </Text>
            <Text>
                Description details
            </Text>
        </View>
        <View>
            <Text>
                Start Time
            </Text>
            <Text>
                End Time
            </Text>
        </View>
        <View>
            <Pressable onPress={()=>{}}><Text>Cancel</Text></Pressable>
        </View>
    </View>
    )
}