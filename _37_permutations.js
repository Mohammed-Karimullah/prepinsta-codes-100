/*

Program for Permutations In Which N People Can Occupy R Seats In A Classroom

Problem Statement :
  In a classroom some of the seats are already occupied by students and only a few seats are available in the classroom. 
  The available seats are assumed as r and n number of students are looking for the seat. 
  We need to find in how many different permutations n number of students can sit on r number of chairs.

Algorithm:

- Input number of students in n
- Input number of seats in r
- Use permutation formula { factorial(n) / factorial(n-r) }
- Print Output

*/

const permutations = (n,r) => {
    const fact = (num) => {
        let ft = 1;
        for(let i =1; i<=num; i++){
            ft *= i;
        }
        return ft;
    }

    if( r > n){
        r = n;
    }
    let res = fact(n)/ fact(n-r);
    console.log(res);
}

permutations(10,6);