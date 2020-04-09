import Product from "./interface";

class Laptop<T> implements Product<T>{
    name: string;
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;

    constructor(name : string, type : T, withNumeric : boolean, withTouchButton : boolean) {
        this.name = name;
        this.type = type;
        this.withNumeric = withNumeric;
        this.withTouchButton = withTouchButton;
    }

}

export default Laptop;
