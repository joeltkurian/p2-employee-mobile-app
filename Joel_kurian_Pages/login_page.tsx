import { Button, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { backgroundContinental, textColor } from "../styling";

const styles = StyleSheet.create({
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    loginContainer: {
        alignItems: 'center',
        backgroundColor: "rgba(255, 250, 250, 0.1)",
        borderColor: 'rgba(255, 250, 250, 0.35)',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    text: {
        color: textColor,
        paddingRight: 15,
    },
    username: {
        backgroundColor: 'rgba(255, 250, 250, 0.65)',
        borderRadius: 10,
        padding: 5,
        fontSize: 20,
        alignItems: 'center',
        flexDirection: "row",
        marginBottom: 10,
    },
    password: {
        backgroundColor: 'rgba(255, 250, 250, 0.65)',
        borderRadius: 10,
        padding: 5,
        fontSize: 20,
        shadowOffset: { width: 0, height: 1 },
        alignItems: 'center',
        flexDirection: "row",
    },
    textInput: {
        textAlign: 'center',
        fontSize: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        color: 'rgba(0, 0, 0, 1)',
        shadowRadius: 1,
        backgroundColor: '#fff3',
        width: `60%`,
        borderWidth: 1,
        elevation: 5,
        borderColor: '#000',
    },
    LoginBTN: {
        marginTop: 10,
        borderRadius: 8,
        padding: 6,
        height: 40,
        elevation: 5,
    }
});

export default function Login() {

    function login() {
        alert('LOGGED IN');
    }

    return (<ImageBackground source={backgroundContinental} style={styles.image}>
        <View style={styles.loginContainer}>
            <View style={styles.username}>
                <Text style={styles.text}>USERNAME:</Text>
                <TextInput style={styles.textInput} />
            </View>
            <View style={styles.password}>
                <Text style={styles.text}>PASSWORD:</Text>
                <TextInput style={styles.textInput} />
            </View>
            <Pressable onPress={() => { login(); }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? 'rgba(200,150,20,0.4)'
                            : 'rgba(255, 200, 50, 0.7)'

                    },
                    styles.LoginBTN
                ]}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>LOGIN</Text>
            </Pressable>
        </View>
    </ImageBackground>);
}