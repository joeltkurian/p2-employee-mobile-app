import { useContext, useState } from "react";
import { View, ImageBackground, StyleSheet, Text, Pressable } from "react-native"
import { pages } from "../dtos";
import { borderColor, gold, hamburger, loginBtn, loginBtnActive, mainBackgroundColor, styleBackground } from "../styling";
import { userContext } from "../userContext";
import ClockInOut from "./clock-in-out";
import NavigationPanel from "./navigation-functions";

export default function HomePage() {
    const account = useContext(userContext);

    const [Nav, setNav] = useState(false);
    const [currentPage, setCurrentPage] = useState(pages.clock);
    function openNav() {
        setNav(Nav ? false : true);
    }
    return (<ImageBackground source={gold} style={styleBackground.image}>
        <View style={styles.welcome}>
            <Text style={styles.welcomeText}>Welcome {account.user.fname}</Text>
        </View>
        {currentPage === pages.clock ?
            <ClockInOut /> :

            <Text>Activity</Text>
        }
        {Nav ?
            <NavigationPanel setNav={setNav} Nav={Nav} setPage={setCurrentPage} />
            :
            <Pressable onPress={openNav}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? loginBtnActive
                            : loginBtn
                    },
                    styles.NavBTN
                ]}>
                <ImageBackground source={hamburger} style={styles.ham} />
            </Pressable >
        }

    </ImageBackground >);
}

const styles = StyleSheet.create({
    ham: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    NAV: {
        position: 'absolute',
        left: 0,
        backgroundColor: mainBackgroundColor,
        height: '100%',
        width: '40%',
        top: '3%',
    },
    NAVNeg: {
        position: 'absolute',
        right: 0,
        height: '100%',
        width: '60%',
    },
    NavBTN: {
        borderRadius: 8,
        height: "6%",
        elevation: 5,
        position: 'absolute',
        top: '4%',
        left: '3%',
        width: '15%',
    },
    welcome: {
        backgroundColor: mainBackgroundColor,
        position: 'absolute',
        top: `4%`,
        right: `0%`,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: borderColor,
        width: '80%'
    },
    welcomeNoClock: {
        width: '100%',
    },
    welcomeClock: {
        width: '78%',
    },
    welcomeText: {
        fontSize: 25,
        padding: 5,
    }
})