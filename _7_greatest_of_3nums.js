/*

Given three integers as inputs the objective is to find the greatest among them. 
In order to do so we check and compare the three integer inputs with each other 
and which ever is the greatest we print that number.

*/


const greatestOf3Nums = (n1,n2,n3) => {
    console.log(n1 >= n2  && n1>= n3?  n1 : n2 >= n1 && n2 >= n3? n2 : n3);
}

greatestOf3Nums(10,50,40);
