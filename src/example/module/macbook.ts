import Laptop from "./base";

class Macbook<T> extends Laptop<T>{

    private _power : boolean = false;

    constructor(name : string, type : T, withNumeric : boolean, withTouchButton : boolean) {
        super(name, type, withNumeric, withTouchButton);
    }

     powerOn() : void {

        this._power = true
    }

    powerOff() : void {

        this._power = false;
    }

    get power() {

        return this._power;
    }

}

export default Macbook;
