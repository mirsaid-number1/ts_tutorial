let a = document.getElementById('a')! as HTMLInputElement;
let b = document.getElementById('b')! as HTMLInputElement;
let output = document.querySelector('.output')! as HTMLDivElement;
let form = document.getElementById('form')! as HTMLFormElement;


form.addEventListener('submit',(e):number => {
    e.preventDefault();
    let result = +e.target[0].value + +e.target[1].value;
    output.append(`Here is result:${result}`)
    return result;
})

// settting types to the returning value and parameters

const check = (num:number,str:string):string => {
    return ' ' + {num,str}
}
console.log(check(22,'2'))

// defining variables

let str:string = 'hello';
let num:number = 12345;
let boolean:Boolean = true;
let obj:Object = {new:'new'};
let arr:Array<string> = ['hello','hello']
console.log(arr)


let obj1: {name:string,age:number} = {name:'Mirsaid',age:18};
//easy pizzy

// // interfaces 
// In TypeScript,
// an interface is an abstract type that tells the compiler which property names a given object can have.
// TypeScript creates implicit interfaces when you define an object with properties.

interface UserInterface {
    name:string,
    age?:number,
    getFullInfo():string
}

let obj2:UserInterface = {
    name:'Said',
    age:18,
    getFullInfo() {
        return 'Hello ' + this.name + ", are you " + this.age + ' years old ?'
    }
}

let obj3:UserInterface = {
    name:'Triple_MMM',
    getFullInfo(){
        return 'Hello ' + this.name;
    }
}

// union
interface ValuesInterface {
    str:string,
    num:number,
}

let value : string | number = '123';
let obj4: ValuesInterface | null = null

// type aliases

type StrNum = string | number;
type StrArr = string[];
type ArrObj = Array<{num:number,str:string}>

let val:StrNum = '2';
let arr1: StrArr = ['hello']
let arr2:ArrObj = [{num:1,str:'hello'}]

// type void 

// if we don't return anything from function then its type should be void

const voidFunc = ():void => {
    console.log('I can\'t return anything in this func');
}

let hello:void = undefined;

// type any

let name1:any = 'string';
name1 = 1;
name1 = {name:"diasrim",age:81};

// type never

// function neverEnd(str:string):never {
//     throw new Error(str);
// }

// neverEnd('hello');

//unknown type

// we can't assign unknown type to another type

let str1:any = 1;
let unknownV:unknown = 1;

let a1:string = str1;
console.log(typeof a1,a1);
// let a2:string = unknownV; this line won't work because we can't convert unknown to another type

// type assertion 

// but types are not changed

let strType:string = '1234';
let unknownNum:unknown = '123';

let strToNum:number = strType as unknown as number;
let unkToNum:number = unknownNum as number;

console.log(typeof strType,typeof strToNum);
console.log(typeof unknownNum,typeof unkToNum);
console.log(strToNum + unkToNum)

let txt = document.getElementById('text') as HTMLInputElement;

txt.addEventListener('change',(e) => {
    let target = e.target as HTMLInputElement;
    console.log(target.value);
})

// class in typescript
interface AudienceInterface{
   getFullInfo():string;
}


class User implements AudienceInterface{
    public firstName:string;
    lastName:string; // in default all of the poperties public
    protected age:number; // in default all of the poperties public
    private password:string;
    readonly unchangableValue:string; 

    constructor(firstName:string,lastName:string,age:number,password:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.password = password;
        this.unchangableValue = firstName + ' ' + lastName;
    }

    changeUnchangable():void{
        // this.unchangableValue = 'smth' we can't change readonly property
    }
    getFullInfo(){
        return `Full Name is ${this.firstName} ${this.lastName}, he/she is ${this.age} years old.
        code=${this.password}
        `
    }
}

let user = new User('Mirsaid','Mirakhmedov',18,"BNM7fe51%");
console.log(user.getFullInfo());
// user.password

// we can define properties in the constructor in three ways public, private, protected ☝

// so public type is open to see everyone

// secondly private property is accessible only inside the class

// protected, in addition, can be used in class and it's children 

//GENERICS

function genericEntrance<Type>(arg:Type,num:number):Type{
    let arg1:number = arg as unknown as number;
    return arg1 + num as unknown as Type;
}

/*
This Type allows us to capture the type the user provides (e.g. number), so that we can use that information later.
*/

// There is one of two ways to run function 

let resultGenericEntrance = genericEntrance<string>('2',1);
console.log(resultGenericEntrance)

// working with generic type variables

function loggingIdentity<Type>(arg:Type[]):Type[]{
    console.log(arg.length)
    return arg
}

let logginhIdentityResult = loggingIdentity<string>(['smth','smth1']);
let nestedGenericEntrance: <Input> ( arg:Input,num:number) => Input = genericEntrance; 
console.log(nestedGenericEntrance('hello',3));