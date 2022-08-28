var a = document.getElementById('a');
var b = document.getElementById('b');
var output = document.querySelector('.output');
var form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var result = +e.target[0].value + +e.target[1].value;
    output.append("Here is result:".concat(result));
    return result;
});
// settting types to the returning value and parameters
var check = function (num, str) {
    return ' ' + { num: num, str: str };
};
console.log(check(22, '2'));
// defining variables
var str = 'hello';
var num = 12345;
var boolean = true;
var obj = { "new": 'new' };
var arr = ['hello', 'hello'];
console.log(arr);
var obj1 = { name: 'Mirsaid', age: 18 };
var obj2 = {
    name: 'Said',
    age: 18,
    getFullInfo: function () {
        return 'Hello ' + this.name + ", are you " + this.age + ' years old ?';
    }
};
var obj3 = {
    name: 'Triple_MMM',
    getFullInfo: function () {
        return 'Hello ' + this.name;
    }
};
var value = '123';
var obj4 = null;
var val = '2';
var arr1 = ['hello'];
var arr2 = [{ num: 1, str: 'hello' }];
// type void 
// if we don't return anything from function then its type should be void
var voidFunc = function () {
    console.log('I can\'t return anything in this func');
};
var hello = undefined;
// type any
var name1 = 'string';
name1 = 1;
name1 = { name: "diasrim", age: 81 };
// type never
// function neverEnd(str:string):never {
//     throw new Error(str);
// }
// neverEnd('hello');
//unknown type
// we can't assign unknown type to another type
var str1 = 1;
var unknownV = 1;
var a1 = str1;
console.log(typeof a1, a1);
// let a2:string = unknownV; this line won't work because we can't convert unknown to another type
// type assertion 
// but types are not changed
var strType = '1234';
var unknownNum = '123';
var strToNum = strType;
var unkToNum = unknownNum;
console.log(typeof strType, typeof strToNum);
console.log(typeof unknownNum, typeof unkToNum);
console.log(strToNum + unkToNum);
var txt = document.getElementById('text');
txt.addEventListener('change', function (e) {
    var target = e.target;
    console.log(target.value);
});
var User = /** @class */ (function () {
    function User(firstName, lastName, age, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.password = password;
        this.unchangableValue = firstName + ' ' + lastName;
    }
    User.prototype.changeUnchangable = function () {
        // this.unchangableValue = 'smth' we can't change readonly property
    };
    User.prototype.getFullInfo = function () {
        return "Full Name is ".concat(this.firstName, " ").concat(this.lastName, ", he/she is ").concat(this.age, " years old.\n        code=").concat(this.password, "\n        ");
    };
    return User;
}());
var user = new User('Mirsaid', 'Mirakhmedov', 18, "BNM7fe51%");
console.log(user.getFullInfo());
// user.password
// we can define properties in the constructor in three ways public, private, protected ☝
// so public type is open to see everyone
// secondly private property is accessible only inside the class
// protected, in addition, can be used in class and it's children 
//GENERICS
function genericEntrance(arg, num) {
    var arg1 = arg;
    return arg1 + num;
}
/*
This Type allows us to capture the type the user provides (e.g. number), so that we can use that information later.
*/
// There is one of two ways to run function 
var resultGenericEntrance = genericEntrance('2', 1);
console.log(resultGenericEntrance);
// working with generic type variables
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var logginhIdentityResult = loggingIdentity(['smth', 'smth1']);
var nestedGenericEntrance = genericEntrance;
console.log(nestedGenericEntrance('hello', 3));
