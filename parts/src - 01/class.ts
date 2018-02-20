// class Person { 
//     //firstName = ""; 
//     lastName = "";
//     constructor(private firstName, lastName) {  
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     name() { 
//         return `${this.firstName} ${this.lastName}`;
//     }

//     whoAreYou() {
//         return `Hi i'm ${this.name()}`; 
//     }
// }

class Student extends Person { 
    course; 

    constructor(firstName, lastName, course) {
        super(firstName, lastName); 
        this.course = course;
    }

    whoAreYou() { 	
        return `${super.whoAreYou()} and i'm studying ${this.course}`; 
    }
}


class Person implements IHuman{
     firstName = "";
     lastName = "";

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

interface IHuman {
    firstName: string;
    lastName?: string;
    myFunc?(str:string):string;
}


let ron = new Person("Ron"," Mizrachi ");
ron.whoAreYou()
// "Hi i'm Ron Mizrachi"

