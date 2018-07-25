'use strict';
function minofThree(p,s,f) {
    const arr1 = [p, s, f];
    let min = 20000;
    for (let j = 0; j < arr1.length; j++) {
        const arrayElement1 = arr1[j];
        if (arrayElement1 < min) {
            min = arrayElement1;
        }
    }
    console.log(min);
}
        minofThree(23,1,34);
function maxOfThree(x, y, z){
    const arr = [x, y, z];
    let max = 0;
    for (let i = 0; i < arr.length; i++){
        const arrayElement = arr[i];
        if (arrayElement > max) {
            max = arrayElement;
        }
    }

    console.log(max);
}

maxOfThree(15, 10, 25);
//function maxOfThree(x, y, z) {
   // let max = 0;
    //[x, y, z].forEach((i) => {
      //  if (i > max) {
        //    max = i;
        //}
    //});
    //console.log(max);
//}
//maxOfThree(15, 10, 25);