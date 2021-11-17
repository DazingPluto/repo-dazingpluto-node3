function helloAgain() {
    return 'hello again, good to see you!'
}
function goodbyeAgain() {
    return 'Goodbye! hope to see you soon'
}
function goodAfternoon() {
    return 'Hi, are you having a good afternoon so far?'
}
const mePersonally ={
    name:'Hunter',
    age:22,
    hair:'Brown',
    car:{
        color : 'black',
        year: 2017
    }
}
class Player{
    constructor(name, age){
        this.name= name;
        this.age= age;
        this.logic= function(){
            return "hi"
        }
    }
}
const sei1025 = [
    "Bloo00",
    "bradyhaa",
    "chenmichael2",
    "cspdevs000",
    "DazingPluto",
    "DevynMalone",
    "jusbuckingham",
    "justinluu8235",
    "kawaharm",
    "kyleisme14",
    "mekeltensley",
    "Mikalai19",
    "nneofotistos",
    "onticinc",
    "Palme412",
    "pambonian",
    "RolandYambao",
    "SGsouthard",
    "sterlingeide",
];
const instructors = [
    'romebell',
    'ga-avery',
    'perice-pope',
]

module.exports ={
    Player,
    mePersonally,
    goodAfternoon,
    goodbyeAgain,
    helloAgain,
    instructors,
    sei1025
}