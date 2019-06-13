// CODE here for your Lambda Classes
class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak(){
        console.log(`Hello! My name is ${this.name} and I'm from ${this.location}`)
    }
}

class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject){
        console.log(`Hello! Today we are studying ${subject}`)
    }
    grade(subject){
        console.log(`Hello ${this.name} recieves a perfect score on ${subject}`)
    }
}

class Students extends Person{
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    listsSubjects(){
        console.log(`${this.favSubjects}`)
    }
    PRAssignment(){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManagers extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(){
        console.log(`${this.name} announces to ${this.channel}, @channel standy times!`)
    }
    debugsCode(){
        console.log(`${this.name} debugs ${this.name}'s code on ${subject}`)
    }
}