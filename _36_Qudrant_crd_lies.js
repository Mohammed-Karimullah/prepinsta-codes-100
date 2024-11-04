/*

find out the quadrant in which the given co-ordinate lie

Algorithm :

- Get value of x & y
- If ( x>0 and y>0 ) First Quadrant
- If ( x<0 and y>0 ) Second Quadrant
- If ( x<0 and y<0 ) Third Quadrant
- If ( x>0 and y<0 ) Fourth Quadrant
- If ( x=0 and y=0 ) Origin
- If ( x!=0 and y=0 ) x-axis
- If ( x=0 and y!=0 ) y-axis

*/

const quadrantCrdLies = (x,y) => {
    let res = x & y > 0 ? `${x} & ${y} lies in the first quadrant` : 
              x & y < 0 ? `${x} & ${y} lies in the third quadrant` : 
              x < 0 & y > 0 ?  `${x} & ${y} lies in the second quadrant` :
              x > 0 & y < 0 ?  `${x} & ${y} lies in the fourth quadrant` :
              x & y === 0 ? `${x} & ${y} lies at the origin` :
              x !== 0 & y === 0 ? `${x} & ${y} lies on X - axis` :
              `${x} & ${y} lies on Y - axis`;
    console.log(res);
}

quadrantCrdLies(24,-14);
