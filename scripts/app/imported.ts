export class Adder {
    numone: number;
    numtwo: number;
    total: number;

    constructor() {
        this.numone = 7;
        this.numtwo = 12;
        this.total = this.numone + this.numtwo;
    }
}

var thing = new Adder();

alert(thing.total);
