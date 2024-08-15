import { sum } from "../sum";

test("checking the sum function ",()=>{
    const result=sum(4,7);

    expect(result).toBe(11);
})

