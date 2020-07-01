// 2.

function showMultiplicationTable (x){
    for (let i=1; i<=10; i++) {
        console.log(x + "x" + i + "=" +(i*x));
    }
}
    showMultiplicationTable (7);


// console.log(x + "x" + i + "=" +(i* x));

//3
    for (let i = 1; i< 10; i++) {
        let y= Math.floor((Math.random()*180)+20);
        console.log(y);
        if (y % 2 === 0 ){
            console.log(y+ " is even number");
        }else{
            console.log(y + " is odd number");
        }
    }

//4. pyramid
for(let i=1;i<=9;i++){
    let str= "";
    for(let j=1;j<=i; j++){ // j,k,l for inner(nested) loop
       str += i;
    }
    console.log(i);
}


//5.
for(let i=100; i>0 ; i-=5){
    console.log(i);
}


