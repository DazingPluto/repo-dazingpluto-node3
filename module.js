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

module.exports ={
    Player,
    mePersonally,
    goodAfternoon,
    goodbyeAgain,
    helloAgain
}