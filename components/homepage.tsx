import { useContext, useState } from "react";
import { View, ImageBackground, StyleSheet, Text, Pressable } from "react-native"
import { pages } from "../dtos";
import { borderColor, gold, hamburger, loginBtn, loginBtnActive, mainBackgroundColor, styleBackground } from "../styling";
import { userContext, clockContext } from "../userContext";
import ActivitiesPage from "./activities/activities-page";
import ClockInOut from "./clock-in-out";
import ProblemsPage from "./problems/problems-page";
import NavigationPanel from "./navigation-functions";
import RoomService from "./room-service/room-service-component";
import EmployeeView from "./employee-view/employee-view";

export default function HomePage() {
    const account = useContext(userContext);
    const user = account.user;
    const [clockedIn, setClockedIn] = useState(false);
    const [Nav, setNav] = useState(false);
    const [currentPage, setCurrentPage] = useState(pages.clock);
    function openNav() {
        setNav(Nav ? false : true);
    }
    return (<ImageBackground source={gold} style={styleBackground.image}>
        <clockContext.Provider value={{ clockedIn: clockedIn, setClockedIn: setClockedIn }}>
            <View style={styles.border}>
                <View style={styles.welcome}>
                    <Text style={styles.welcomeText}>Welcome {account.user.fname}</Text>
                </View>
                <View style={styles.pages}>
                    {currentPage === pages.clock ?
                        <ClockInOut /> :
                        currentPage === pages.activity ?
                            <ActivitiesPage /> :
                            currentPage === pages.room ?
                                <RoomService /> :
                                currentPage === pages.problems ?
                                    <ProblemsPage /> :
                                    currentPage === pages.employeeview ?
                                        <EmployeeView /> : <Text>SOMETHING WENT WRONG</Text>
                    }
                </View>

                {Nav ?
                    <NavigationPanel setNav={setNav} Nav={Nav} setPage={setCurrentPage} account={user} />
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
            </View></clockContext.Provider>
    </ImageBackground >);
}

const styles = StyleSheet.create({
    border: {
        height: '98%',
        width: '100%',
    },
    pages: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
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