const greatestOf3Nums = (n1,n2,n3) => {
    console.log(n1 >= n2  && n1>= n3?  n1 : n2 >= n1 && n2 >= n3? n2 : n3);
}

greatestOf3Nums(10,50,40);