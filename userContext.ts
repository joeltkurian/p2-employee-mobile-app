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

