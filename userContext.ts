import { createContext } from "react";
import { Employee } from "./dtos";


const account: Employee = {
    id: NaN, isManager: false, fname: '', lname: '', username: '', password: ''
};

export interface AccountContext {
    account: Employee,
    setAccount: Function,
}
function does(s: any) {
    alert('Something Failed');
}

export const userContext = createContext({ user: account, setUser: does });

export const clockContext = createContext({ clockedIn: false, setClockedIn: does });


export function formatted_date(date: number) {
    var result = "";
    var d = new Date(date);
    result += "Date: " + (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear() + '\n' +
        "Time: " + d.getHours() + ":" + d.getMinutes() + ":" +
        d.getSeconds() + " ";
    return result;
}