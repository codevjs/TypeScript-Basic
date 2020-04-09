class List<T> {

    private _data : T[];

    constructor(...elements : T[]) {
        this._data = elements;
    }

    add(element : T) : void {

        this._data.push(element);
    }

    addMultiple(...elements : T[]) : void {

        this._data.push(...elements);
    }

    getData() : T[] {

        return this._data;
    }
}
