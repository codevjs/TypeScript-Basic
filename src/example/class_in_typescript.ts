export default class User {

    private _name : string;
    private _age  : number;
    private _phoneNumber : string;

    constructor(name : string, age : number, phoneNumber :  string) {
        this._name = name;
        this._age  = age;
        this._phoneNumber = phoneNumber;
    };

    getName = () : string => this._name;

    getAge = () : number  => this._age;

    getPhoneNumber =  () : string | number => this._phoneNumber;

    getInfo = () : object => {

        return {
            name : this._name,
            age : this._age,
            phoneNumber  : this._phoneNumber
        }
    };

    setName = (value : string) : void => {

        this._name = value;
    };

    setAge = (value : number) : void => {

        this._age = value;
    };

    setPhonNumber = (value : string) : void => {

        this._phoneNumber = value;
    };
}



