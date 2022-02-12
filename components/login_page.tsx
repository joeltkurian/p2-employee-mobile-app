import { useState } from "react";
import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Employee } from "../dtos";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    loginBtn, loginBtnActive, borderColor,
    mainBackgroundColor, paddingColor, backgroundContinental,
    textColor, styleBackground
} from "../styling";
import loginService from "../service/login-service";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions";

export default function Login(props: { setUser: Function }) {
    const [account, setAccount] = useState({ username: '', password: '' });
    const dispatch = useDispatch();

    async function login() {
        if (account.username != '' && account.password != '') {
            
            try{let user = await loginService.login(account.username, account.password)
            dispatch(loginUser(user))
            await AsyncStorage.setItem("user", JSON.stringify(user));
            props.setUser(user);} catch(error) {
                alert('Incorrect Username or Password');
            }


        } else {
            alert('Enter Username and Password');
        }
    }

    return (<ImageBackground source={backgroundContinental} style={styleBackground.image}>
        <View style={styles.loginContainer}>
            <View style={styles.username}>
                <Text style={styles.text}>USERNAME:</Text>
                <TextInput style={styles.textInput} onChangeText={t => setAccount({ username: t, password: account.password })} />
            </View>
            <View style={styles.password}>
                <Text style={styles.text}>PASSWORD:</Text>
                <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={t => setAccount({ username: account.username, password: t })} />
            </View>
            <Pressable onPress={() => { login(); }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? loginBtnActive
                            : loginBtn
                    },
                    styles.LoginBTN
                ]}>
                <Text style={styles.loginBtnText}>LOGIN</Text>
            </Pressable>
        </View>
    </ImageBackground>);
}

const styles = StyleSheet.create({
    loginContainer: {
        alignItems: 'center',
        backgroundColor: paddingColor,
        borderColor: borderColor,
        borderWidth: 1,
        borderRadius: 10,
        bottom: '1%',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    username: {
        backgroundColor: mainBackgroundColor,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: borderColor,
        padding: 5,
        fontSize: 20,
        alignItems: 'center',
        flexDirection: "row",
        marginBottom: 10,
    },
    password: {
        backgroundColor: mainBackgroundColor,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: borderColor,
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
    text: {
        color: textColor,
        fontWeight: 'bold',
        fontSize: 15,
        paddingRight: 15,
    },
    LoginBTN: {
        marginTop: 10,
        borderRadius: 8,
        padding: 6,
        height: 40,
        elevation: 5,
    },
    loginBtnText: {
        color: textColor,
        fontWeight: 'bold',
        fontSize: 25,
    }
});