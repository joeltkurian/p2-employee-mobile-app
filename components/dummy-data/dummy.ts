import { ServiceRequest } from "../../dtos";

export const dummyData =
    [
        {
            id: "101",
            title: "Dance",
            desc: "Learn ballet, failure isn't tollerated",
            startTime: 800,
            endTime: 1200,
            location: "Nightclub",
            status: "On Schedule"
        },
        {
            id: "202",
            title: "Contract Bar Crawl",
            desc: "Tilt one back while you watch yours",
            startTime: 700,
            endTime: 1200,
            location: "Contract Bar",
            status: "On Schedule"
        },
        {
            id: "303",
            title: "Hot yoga",
            desc: "Suffering makes excellence",
            startTime: 600,
            endTime: 800,
            location: "Terrace",
            status: "Cancelled"
        },
        {
            id: "404",
            title: "Wrestling",
            desc: "Win at all cost, punish the loser",
            startTime: 600,
            endTime: 800,
            location: "Gymnasium",
            status: "On Schedule"
        },
        {
            id: "505",
            title: "Maintenace",
            desc: "All weapons must be properly tended to",
            startTime: 1100,
            endTime: 1200,
            location: "Vault",
            status: "Cancelled"
        },
        {
            id: "411",
            title: "Reservations",
            desc: "We regret this need, but in case of reservation, do call",
            startTime: 900,
            endTime: 1000,
            location: "Grand Lobby",
            status: "Cancelled"
        },
        {
            id: "606",
            title: "Adjudication",
            desc: "You shall be judged",
            startTime: 900,
            endTime: 1100,
            location: "Balcony",
            status: "On Schedule"
        },
    ]

export const dummyLocation =
    [
        {
            label: "Contract Bar",
            value: 0,
            imageLink: 'https://www.images-apmex.com/images/Catalog%20Images/Products/193803_obv.jpg'
        },
        {
            label: "Pool",
            value: 1,
            imageLink: 'https://www.images-apmex.com/images/Catalog%20Images/Products/193803_obv.jpg'
        },
        {
            label: "Grand Lobby",
            value: 2,
            imageLink: 'https://www.images-apmex.com/images/Catalog%20Images/Products/193803_obv.jpg'
        },
        {
            label: "Terrace",
            value: 3,
            imageLink: 'https://www.images-apmex.com/images/Catalog%20Images/Products/193803_obv.jpg'
        },
        {
            label: "Tools Vault",
            value: 4,
            imageLink: 'https://www.images-apmex.com/images/Catalog%20Images/Products/193803_obv.jpg'
        },
        {
            label: "Nightclub",
            value: 5,
            imageLink: 'https://www.images-apmex.com/images/Catalog%20Images/Products/193803_obv.jpg'
        },
        {
            label: "Balcony",
            value: 6,
            imageLink: 'https://www.images-apmex.com/images/Catalog%20Images/Products/193803_obv.jpg'
        },
        {
            label: "Gymnasium",
            value: 7,
            imageLink: 'https://www.images-apmex.com/images/Catalog%20Images/Products/193803_obv.jpg'
        },
    ]

export const dummyProblems =
    [
        {
            id: "Room #101",
            submittedTime: 800,
            desc: "The bathroom sink is leaking",
            status: "Unreviewed",
            photoLink: 'https://www.images-apmex.com/images/Catalog%20Images/Products/193803_obv.jpg',
        },
        {
            id: "Room #202",
            submittedTime: 600,
            desc: "The bathroom sink is leaking",
            status: "Unreviewed",
            //photoLink?: string
        },
        {
            id: "Room #303",
            submittedTime: 1100,
            desc: "The room has a broken light",
            status: "Unreviewed",
            photoLink: 'https://i.insider.com/5ae21c0a19ee8623008b456a?width=1136&format=jpeg',
        },
        {
            id: "Room #404",
            submittedTime: 1000,
            desc: "A/C doesn't work",
            status: "Unreviewed",
            photoLink: 'https://i.insider.com/5ae21c0a19ee8623008b456a?width=1136&format=jpeg',
        },
        {
            id: "Room #444",
            submittedTime: 1200,
            desc: "Found a rat in the room",
            status: "Unreviewed",
            //photoLink?: string
        },
        {
            id: "Room #930",
            submittedTime: 800,
            desc: "Fridge isn't turning on",
            status: "Unreviewed",
            //photoLink?: string
        },
        {
            id: "Room #621",
            submittedTime: 300,
            desc: "TV doesn't want to turn on",
            status: "Unreviewed",
            //photoLink?: string
        },
        {
            id: "Room #1307",
            submittedTime: 900,
            desc: "The lock on my door is broken",
            status: "Reviewed",
            //photoLink?: string
        },
    ];

export const dummy: ServiceRequest[] = [
    {
        id: "001", room: "101", created: 1000, status: "Ordered", requestedOffering: [
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Soup*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Beef Wellington*Lorem Ipsum about Beef Wellington Lorem Ipsum about Beef Wellington Lorem Ipsum about Beef Wellington Lorem Ipsum about Beef Wellington Lorem Ipsum about Beef Wellington ", cost: 25.30 },
            { desc: "Scotched Egg*Lorem Ipsum about Scotched Eggs", cost: 25.30 },
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
        ]
    },
    {
        id: "002", room: "102", created: 2000, status: "Processing", requestedOffering: [
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
        ]
    },
    {
        id: "003", room: "103", created: 3000, status: "Ordered", requestedOffering: [
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Soup*Lorem Ipsum about Steak", cost: 25.30 },
        ]
    },
    {
        id: "004", room: "201", created: 4000, status: "Processing", requestedOffering: [
            { desc: "Scotched Egg*Lorem Ipsum about Scotched Eggs", cost: 25.30 },
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
        ]
    },
    {
        id: "005", room: "202", created: 5000, status: "Ordered", requestedOffering: [
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Soup*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Scotched Egg*Lorem Ipsum about Scotched Eggs", cost: 25.30 },
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
        ]
    },
    {
        id: "006", room: "203", created: 6000, status: "Ordered", requestedOffering: [
            { desc: "Soup*Lorem Ipsum about Steak", cost: 25.30 },
        ]
    },
    {
        id: "007", room: "301", created: 7000, status: "Ordered", requestedOffering: [
            { desc: "Soup*Lorem Ipsum about Steak", cost: 25.30 },
        ]
    },
    {
        id: "008", room: "302", created: 8000, status: "Ordered", requestedOffering: [
            { desc: "Beef Wellington*Lorem Ipsum about Beef Wellington", cost: 25.30 },
        ]
    },
    {
        id: "009", room: "101", created: 1000, status: "Ordered", requestedOffering: [
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Soup*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Beef Wellington*Lorem Ipsum about Beef Wellington Lorem Ipsum about Beef Wellington Lorem Ipsum about Beef Wellington Lorem Ipsum about Beef Wellington Lorem Ipsum about Beef Wellington ", cost: 25.30 },
            { desc: "Scotched Egg*Lorem Ipsum about Scotched Eggs", cost: 25.30 },
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
        ]
    },
    {
        id: "010", room: "102", created: 2000, status: "Processing", requestedOffering: [
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
        ]
    },
    {
        id: "011", room: "103", created: 3000, status: "Ordered", requestedOffering: [
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Soup*Lorem Ipsum about Steak", cost: 25.30 },
        ]
    },
    {
        id: "012", room: "201", created: 4000, status: "Processing", requestedOffering: [
            { desc: "Scotched Egg*Lorem Ipsum about Scotched Eggs", cost: 25.30 },
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
        ]
    },
    {
        id: "013", room: "202", created: 5000, status: "Ordered", requestedOffering: [
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Soup*Lorem Ipsum about Steak", cost: 25.30 },
            { desc: "Scotched Egg*Lorem Ipsum about Scotched Eggs", cost: 25.30 },
            { desc: "Steak*Lorem Ipsum about Steak", cost: 25.30 },
        ]
    },
    {
        id: "014", room: "203", created: 6000, status: "Ordered", requestedOffering: [
            { desc: "Soup*Lorem Ipsum about Steak", cost: 25.30 },
        ]
    },
    {
        id: "015", room: "301", created: 7000, status: "Ordered", requestedOffering: [
            { desc: "Soup*Lorem Ipsum about Steak", cost: 25.30 },
        ]
    },
    {
        id: "016", room: "302", created: 8000, status: "Ordered", requestedOffering: [
            { desc: "Beef Wellington*Lorem Ipsum about Beef Wellington", cost: 25.30 },
        ]
    },
];