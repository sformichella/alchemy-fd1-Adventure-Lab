const orbitalFlight = {
    id: 'kerbin-orbital-flight',
    title: 'Orbital Flight',
    selections: [
        {
            id: 'inefficient',
            title: 'Vertical Climb Maneuver',
            experience: 10,
            fuel: 50,
            description: "Fly straight up and the tilt your spacecraft once you've existed the atmosphere. Not very fuel-efficient, but easy."
        },
        {
            id: 'efficient',
            title: 'Gravity Turn',
            experience: 30,
            fuel: 40,
            description: 'Execute a gravity turn. Pitch your spacecraft over at the right moment to fight gravity as little as possible. Saves some fuel, but difficult.'
        }
    ],
    image: 'blah',
    description: 'Go on an orbital flight and come back.',
    rewards: {
        money: 100,
        experience: 20,
        science: 50
    },
}

const oceanFlyover = {
    id: 'ocean',
    title: 'Ocean Flyover',
    selections: [
        {
            id: 'splashdown',
            title: 'Spashdown',
            fuel: 10,
            description: 'Fly up a bit, make some observations, and then gently crash into the water.'
        },
        {
            id: 'landing',
            title:'Landing',
            experience: 30,
            fuel: 20,
            money: 100,
            description: "Try to land back on.. well land. It's harder than a splashdown and costs more fuel, but it might be cool."
        }
    ],
    image: 'blah',
    description: 'Fly over the ocean.',
    rewards: {
        money: 100, 
        experience: 50,
        science: 50
    }
}

const kerbinMissions = [
    orbitalFlight,
    oceanFlyover
]

export default kerbinMissions;

// const oceanFlyover = {
//     id: ,
//     title: ,
//     selections: [

//     ],
//     image: ,
//     description: ,
//     rewards: {
//         money: , 
//         experience: ,
//         science: 
//     }
// }