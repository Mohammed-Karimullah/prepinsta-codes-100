/*

Given two integers high and low for limits as inputs, the objective is to write a code to Find the Armstrong Numbers in a given Interval

*/

const armstrongNumInGivRng = (low,high) => {
    for(let i = low ; i <= high ; i++){
        let len = i.toString().length;
        let nsplit = i.toString().split('');
        let res = nsplit.map(Number)
               .reduce((sum,digit) => sum + (digit ** len),0);
        if(res === i){
            console.log(i);
        }
    }
}

armstrongNumInGivRng(10,10000)