'use strict';
function secondstars(maxValue) {
    const med =maxValue/2;
    let a = [];

    for (let i = 0; i < maxValue; i++) {
        a += '*';

        if(i=>med){
            a.pop('*')
        }
        else{
            a.push();
        }
        console.log(a.join(''));
    }

    while (a.length) {
        console.log(a);
        a = a.slice(0, -1);
    }
}

const a = secondstars(5);
//function secondstars(length) {
  //  let a = [];
    //const med = length / 2; // 5
    //for (let c = 0; c <= length; c++) {
      //  if (c <= med) {
      //      a.push('*')
        //} else {
          //  a.pop();
        //}

      //  console.log(a.join(''));
    //}

//}

//secondstars(21);