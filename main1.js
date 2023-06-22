let newArr = [5, 1400, 15, 24, 500, 70, 1999, 900, 100];

// function arrDisplay(newArr) {
//     document.write(newArr);
// }
// arrDisplay(newArr);



// let i =0;
// function arrEven(newArr) {
//     for(i; i<=newArr.length; i++){
//         if(newArr[i]%2==0){
//             document.write(newArr[i]+",");
//         }
//     }
// }
// arrEven(newArr);



// let i =0;
// let j =0;
// function arrSum(newArr) {
//     for(i; i<newArr.length; i++){
//         j+=newArr[i];
//         }
//         document.write(j);
//     }
// arrSum(newArr);




// let i =0;
// let j =0;
// function arrMax(newArr) {
//     for(i; i<newArr.length; i++){
//         console.log(i);
//         if(j<newArr[i])
//         j=newArr[i];
//         }
//         document.write(j);
//     }
// arrMax(newArr);




// let elem = +prompt("Enter elem");
// let index = +prompt("Enter index");;
// function newElem(newArr) {
//     newArr.splice(index, 0, elem);
//         document.write(newArr);
//     }
// newElem(newArr);





// let index = +prompt("Enter index");;
// function delElem(newArr) {
//     newArr.splice(index, 1,);
//         document.write(newArr);
//     }
// delElem(newArr);




let newArr2 = [5, 12, 24, 50, 61, 900];

// function sravnitMassivy(newArr, newArr2){
//   var newArr3 = [];
//   for (var i=0; i<newArr.length; i++){
//     var index = newArr[i];
//     if(newArr2.indexOf(index) === -1)
//     newArr3.splice(0,0,index);
//   }
//   document.write(newArr2.concat(newArr3.reverse()));
// }
// sravnitMassivy(newArr, newArr2);





// function sravnitMassivy(newArr, newArr2){
//   var newArr3 = [];
//   for (var i=0; i<newArr.length; i++){
//     var index = newArr[i];
//     if(newArr2.indexOf(index) !== -1)
//     newArr3.splice(0,0,index);
//   }
//   document.write(newArr3.reverse());
// }
// sravnitMassivy(newArr, newArr2);





// function sravnitMassivy(newArr, newArr2){
//   var newArr3 = [];
//   for (var i=0; i<newArr.length; i++){
//     var index = newArr[i];
//     if(newArr2.indexOf(index) === -1)
//     newArr3.splice(0,0,index);
//   }
//   document.write(newArr3.reverse());
// }
// sravnitMassivy(newArr, newArr2);





var fruit = ["apple", "pear", "banana", "apricot", "peach"];

// function sortFr(fruit){
//   fruit.sort();
//   document.write(fruit);
// }

// function list(fruit){
// newMethod = '<ul>';
// fruit.forEach(function(item, i, arr) {
//   newMethod += '<li>'+item+'</li>';
// });
// newMethod += '</ul>'
// document.write(newMethod);
// }
// sortFr(fruit);
// list(fruit);



// searchFruit(fruit);
// function searchFruit(fruit){

//     let answer = prompt("Enter fruit").toLowerCase();

//     fruit.forEach(function(item, i, arr){

//         if(answer===item){
//             var newItem = item;
//             document.write(newItem);
//         }
//     });

//     if(newItem!==item)
//     document.write(-1);
// }





// function searchFruit(fruit){

//     let answer = prompt("Enter fruit").toLowerCase();

//     for(var i=0; i<fruit.length; i++){
//         console.log(fruit[i]);

//         if(answer===fruit[i]){
//             return (i);
//         }   
//     }
//     return (-1);
// }
// let index = searchFruit(fruit);
// if(index !==-1){
//     document.write("Index "+index);
// } else {
//     document.write("-1");
// }