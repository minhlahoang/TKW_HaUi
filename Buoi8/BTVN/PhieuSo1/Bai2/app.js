const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const a3 = [3, 'a', 2, 4, 9];
let arrTemp = [];
// const k;

// sắp xếp mảng
arr1.sort().reverse();

for (let val of a3) {
    let count = 0;
    count = arr1.lastIndexOf(val) - arr1.indexOf(val) + 1;
    arrTemp.push(count);
}

const max = Math.max(...arrTemp);   // giá trị max của mảng arrTemp
const indexMax = arrTemp.indexOf(max);  // tìm vị trí max của mảng arrTemp
console.log( a3[indexMax] + ' ( ' + max + ' times )');