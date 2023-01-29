// const obj = {}
// const obj2 = new Object()
// console.log(obj);
// console.log(obj2);

// const obj = {
//     name: 'igor',
//     job: 'reaktor',
//     age: '89',
//     sex: 'man'

// }
// const objKeys = Object.keys(obj)
// console.log(objKeys);

// const objValues = Object.values(obj)
// console.log(objValues);

// console.log(obj.isMarried);
// obj.isMarried = true
// console.log(obj);
// obj.job = 'mysor'
// console.log(obj);

// const obj2 = obj
// console.log(obj2);

// obj2.field = 'qqqq'
// console.log(obj);
// console.log(obj2);

// const obj3 = {}

// for ( prop in obj){
//     console.log(prop);
//     obj3[prop] = obj[prop]
// }
// console.log(obj3);
// obj3.lol = 'lol'

// console.log(obj);
// console.log(obj3);

// const obj4 = Object.assign(obj)
// console.log('obj4', obj4);

// const obj5 = Object.freeze(obj)
// obj5.lol = 'lol' 
// console.log('obj5', obj5);
// console.log(obj.hasOwnProperty('job'));













// function sayHello() {
//     console.log('hello!');
    

// }
// sayHello()

// function summ(a,b) {
//     console.log(a+b);
// }

// summ(4,106)
// summ(987654321,123456789)

// function summ(a,b,c) {
//     console.log(a-b+c);
    
// }
// summ(123,1231246,346)
// summ(346,123,1231246)


// const summ2 = function(a,b,c) {
//     console.log(a+b-c);

// }
// summ2(123,1231246,346)
// summ2(346,123,1231246)


// const summ3 = (a,b,c) => console.log(a+b-c);
// summ3(123,1231246,346)
// summ3(346,123,1231246)




// window.onload = (function(){
//     console.log('hello');
// }) ()


// function args (a,b,c, ...rest){
//     const sum = a+b+c
//     console.log(rest);
// }
// args(1,2,3,4,5,6,7,8)

// const arr = [1,2,3,4,5,6]
// console.log(...arr);

// function dis(a,b,c){
//         const disc = (b*b-4*a*c);
//         console.log(disc);
//         if(disc > 0 ){
//             console.log('2 корня');
//         const x1 = (-b + Math.sqrt(disc))/(2*a)
//         const x2 = (-b - Math.sqrt(disc))/(2*a)
//         console.log(x1);
//         console.log(x2); 

//          }  else if(disc === 0){
//                 const x = (-b+(disc) )/(2*a)
//                 console.log(x);
//          }   else{
//             console.log('нет корней');
//          }
// }

// dis(3,-4,94)



function stri (str){
    let counter = 0
    const arr= [' ',',','!','.']

    for(let i = 0; i < str.length; i++ ) {
        if ( str[i] === str[i].toUpperCase() && !arr.includes(str[i])){
            counter++
        }
    }
    console.log(counter);
}
stri('I HAVE car')