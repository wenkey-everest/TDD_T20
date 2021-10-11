import {ballsRemaining} from "./app"

test("test for number of balls left is 24", ()=>{
    const totalBall=ballsRemaining();
    expect(totalBall).toBe(24);
})