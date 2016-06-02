import {Adder} from './imported';

export class SystemAdder {
    newTotal: number;

    constructor() {
        var adder = new Adder();
        this.newTotal = 10 + adder.total;
    }
}
var thing = new SystemAdder();
alert(thing.newTotal);
