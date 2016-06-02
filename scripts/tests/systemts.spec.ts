import {SystemAdder} from '../app/systemts';

describe('test this file', () => {
    it('should add up', () => {
        var thing = new SystemAdder();
        expect(thing.newTotal).toBe(29);
    });
    //    it('should not add up', () => {
    //        var thing = new simpletests.Add();
    //        expect(thing.total).toBe(0);
    //    });
});

it('true is true', () => expect(true).toEqual(true));
