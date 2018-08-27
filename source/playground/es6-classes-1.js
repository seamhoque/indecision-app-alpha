class Person {

    constructor (name = 'anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getDesciption(){
        return `${this.name} is ${this.age} years old`
    }

    getGreetings(){
        return `Hi i am ${this.name}, i am ${this.age} years old.`
    }

}

class student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !! this.major;
    }

    getDesciption(){
        let description = super.getDesciption();
        if(this.hasMajor()){
            description = description + ` and his major is ${this.major}`;
            return description;
        }
    }

}

class Traveller extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !! this.homeLocation;

    }

    getGreetings(){
        let greetings = super.getGreetings();
        if(this.hasHomeLocation()){
            greetings = greetings + `i am now visiting ${this.homeLocation}`;
            return greetings;
        }
        return greetings;
        
    }
}

const me = new student("Mazharul Hoque",25,"software engineering");


const traveller = new Traveller("Mazharul Hoque",45,"Dhaka");
console.log(traveller.getGreetings());

const nonTraveller = new Traveller();
console.log(nonTraveller.getGreetings());



