export default class User {

    private _name : string;
    private _age  : number;
    private _phoneNumber : string;

    constructor(name : string, age : number, phoneNumber :  string) {
        this._name = name;
        this._age  = age;
        this._phoneNumber = phoneNumber;
    };

    get name() : string {

        return this._name;
    }

    get age() : number {

        return this._age;
    }

    get phoNumber() : string {

        return this._phoneNumber;
    }

    get info() : object {

        return {
            name : this._name,
            age : this._age,
            phoneNumber  : this._phoneNumber
        }
    }

    set name(value : string)  {

        this._name = value;
    }

    set age(value : number) {

        this._age = value;
    }

    set phoNumber(value: string) {

        this._phoneNumber = value;
    }
}



