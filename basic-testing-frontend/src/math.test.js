import {it,expect} from 'vitest';
import {add} from './math';
it('should sumarize all number values in an array',()=>{
    //arange
    const numbers = [1,2];

    //act
    const result= add(numbers)

    //asserts
    const expectedresult = numbers.reduce((prevalue,curvalue)=>prevalue+curvalue,0);
    expect(result).toBe(expectedresult);
});