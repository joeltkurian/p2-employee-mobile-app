export interface Activity {
    id: string,
    title: string,
    desc: string,
    startTime: number,
    endTime: number,
    location: string,
    status: "On Schedule" | "Cancelled"
}

export interface ServiceRequest {
    id: string,
    room: string,
    created: number,
    status: "Ordered" | "Processing" | "Completed" | "Cancel",
    requestedOfferings: Offering[]
}

export interface Offering {
    desc: string,
    cost: number
}

export interface Offerings {
    items: Offering[],
    quantities: number[]
}

export interface ProblemSubmission {
    desc: string,
    base64Photo?: string
}

export interface Problem {
    id: string,
    submittedTime: number,
    desc: string,
    status: "Unreviewed" | "Reviewed",
    photoLink?: string
}

export interface Employee {
    id: number,
    isManager: boolean,
    fname: string,
    lname: string,
    username: string,
    password: string
}

export interface WorkLog {
    id: number,
    type: "CHEKIN" | "CHECKOUT",
    timestamp: number
}


export interface MyWorkLog {
    id:number,
    timestamp:Date,
    employeeId:number,
    action:'CHECKIN' | 'CHECKOUT'
}

export const pages = { clock: 'Clock in/Out', activity: 'Activites', room: 'Room Services', problems: 'Problems', employeeview: 'Available Employees' };
export const defaultActivity: Activity =
{
    id: "",
    title: "",
    desc: "",
    startTime: NaN,
    endTime: NaN,
    location: "",
    status: "On Schedule"
}

export const defaultProblem: Problem =
{
    id: "",
    submittedTime: NaN,
    desc: "",
    status: "Unreviewed",
    photoLink: "",
}

interface LocationImage {
    location: "Nightclub" | "Contract Bar" | "Terrace" | "Gymnasium" | "Tools Vault" | "Grand Lobby" | "Balcony" | "Pool";
    photoLink: string
}

export const activityLocationBasedImages: LocationImage[] = [
    { location: "Pool", photoLink: 'https://specialspectacleimg.blob.core.windows.net/continentalimgs/pool.jpg' },
    { location: "Balcony", photoLink: 'https://specialspectacleimg.blob.core.windows.net/continentalimgs/balcony.jpg' },
    { location: "Contract Bar", photoLink: 'https://specialspectacleimg.blob.core.windows.net/continentalimgs/bar.jpg' },
    { location: "Grand Lobby", photoLink: 'https://specialspectacleimg.blob.core.windows.net/continentalimgs/lobby.jpg' },
    { location: "Gymnasium", photoLink: 'https://specialspectacleimg.blob.core.windows.net/continentalimgs/gym.jpg' },
    { location: "Nightclub", photoLink: 'https://specialspectacleimg.blob.core.windows.net/continentalimgs/club.jpg' },
    { location: "Terrace", photoLink: 'https://specialspectacleimg.blob.core.windows.net/continentalimgs/terrace.jpg' },
    { location: "Tools Vault", photoLink: 'https://specialspectacleimg.blob.core.windows.net/continentalimgs/vault.jpg' },
]

export const maxDescLength = 280;

export const timeFormat = /^([0-1][0-9]|2[0-3])([0-5][0-9])$/;