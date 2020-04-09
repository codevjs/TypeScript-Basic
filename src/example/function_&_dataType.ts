/**
 * Type basic
 * 2. fugis && data type
 */

/**
 * string function
 * @param {string} name
 * @return {string}
 */
type Stringfunc = (arg : string) => string;
// function getName(name : string) : string {
//     return "Hello " + name;
// }
const getName : Stringfunc = (name : string) : string => {

    return name;
};

/**
 * number
 * @param {number} age
 * @return {number}
 */
function getAge(age : number) : number {
    return age;
}

/**
 * procedure
 * @param {any} args
 */
function print(args : any) : void {
    console.log(args);
}

