interface Laptop {
    name : string;
    on() : void;
    off() : void;
}

class Macbook implements Laptop {
     name: string = "Macbook pro";
     keyboardLightColor : string = "white";
     private _power : boolean = false;

     constructor(name : string, keyboardLightColor : string) {
         this.name = name;
         this.keyboardLightColor = keyboardLightColor;
     }

    off(): void {

         this._power = false;
    }

    on(): void {

         this._power = true;
    }
}
