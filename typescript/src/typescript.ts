// // interface someClass{
// //     id :number
// //     name:string
// // }

// // let someObj : someClass = {
// //     id: 2,
// //     name: 'someName'
// // }

// let someString: string = 'some string'

// someString.toUpperCase();

// console.log(someString)

// let someNumber: number = 2;

// someNumber += 2;

// console.log(someNumber)

// let someBool : Boolean = true;

// someBool = someBool && false;

// // someNumber = 'name'

// // we can also define union type in a variable

// var value : number | string ;

// value = 4;
// value = 'Shvam'


// // pre defined literal types are also applicable

// var lit : 'todo' | 'process' | 'done' = 'done'

// // lit = 'tommorow'  --- this is wrong as we have defined it previously that it should be of specific val only


// let Books : string[] = ['book1', 'book2', 'book3']

// let targetBook : string | undefined

// for (let book of Books){
//     if(book === 'book1'){
//         targetBook = 'book1'
//         let len = targetBook.length /* here we can use the method of string as typescript in this scope knows that targetbook is string */
//     }
// }

// let len = targetBook?.length /*here we cannot specify the method as we dont know the actual type of var as it can also be undefined */


// // lets create an object 

// let obj : {brand : string, year : number}

// obj = {
//     brand : 'BMW',
//     year : 2022
// }
 
// // to assign the type of object

// let books : {title: string , cost:number} = {title: 'book1', cost: 100}
// let pens : {title: string , cost:number} = {title: 'pen1', cost: 10}
// let notebooks : {cost:number} = {cost: 200}

// let item :{readonly title ?: string , cost : number}[] = [books, pens, notebooks] /* Now here the type notebook does not have the title attribute so to overcome that anomily we can use ? */
// // if i put readonly i can only read the att. and cannot make anychanges


// // specific function

// function addnumber(num1 : number, num2 : number) : number{ /* we should take care of the return type as in javascript if we dont assign it it will be any */
//     return num1 + num2
// }

// let addednumber = addnumber(1,2);


// //for example 

// function addnumber1(num1 : number, num2 : number) : any{ /* we should take care of the return type as in javascript if we dont assign it it will be any */
//     return num1 + num2
// }

// let addednumber1 = addnumber1(1,2); /* now this added number has type any and one can call any method to it which is not specific for number which could possibly generate an error*/

// // addednumber.myMethod()

// // the main adv. of type-script is we have to pre define the type of a variable as it check the type in compile time and help us in prod. time


// var namearray : string[] = ['shivam', 'shyam', 'ram']

// let check = checkName(namearray)
// console.log(check)
// function checkName(namearray : string[]) : boolean{
//     for (let name of namearray){
//         if(name === 'shivam'){
//           return true
//         }
//     }
//     return false
// }


// function totalSum(message: string, ...values: number[]) : string{
//    let modify = values.map((num)=>num * 2)
//    console.log(modify);

//    let sum = values.reduce((prev, curr) => {    
//          return prev + curr;
//    })

//    console.log(sum);
//    return `${message}${sum}`
   
// }

// let total = totalSum('The sum is', 1, 2, 3, 4, 5)


// function createEmployee ({id} : {id : number}) :{id : number ; Active : boolean;}{
//     return {id, Active: id % 2 === 0 }
// }

// const first = createEmployee({id : 1});
// const second = createEmployee({id : 2});


// // typeguards : this means to check if the assigned type matches the required type
// // inline
// // properties
// function task(input: string | number, config ?:{ reverse :boolean }) : string{
//     if( typeof input === 'number'){
//         return `Square of thber is : ${input * input}`
//     }else if(config?.reverse && typeof input === 'string'){
//         return `${input.toLowerCase()}`
        
//     }else{
//         return `${input.toUpperCase()}`
//     }
// }

// let res = task( 5, {reverse : false})
// console.log(res);

// let res1 = task( 'ghUUgh')
// console.log(res1);

// let res2 = task( 'ghUUgh', {reverse : true})
// console.log(res2);

// // Alias

type Employee = {
    id : number,
    name : string
    department : string
}

type Manager = {
    id : number,
    name : string
    employees : string[]
}

type Staff = Employee | Manager

function printStaffDetails (staff : Staff) : void{
    if( 'employees' in staff){
        console.log(`Person is a Manager and he manages ${staff?.employees.length} people`);
    }else{
        console.log(`Person is a Employee and he works in ${staff?.department}`);
        
    }
}

printStaffDetails({id : 1, name : 'shivam', employees : ['Shivam', 'Shubham']})




