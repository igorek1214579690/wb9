// const obj = {
//     firstName: 'igor',
//     secondName: 'streltsov',
//     info: function(phone,email) {
//         console.log(`${this.firstName} ${this.secondName}`);
//         if (phone && email){
//         console.log('Phone:', phone);
//         console.log('Email:', email);
//     }

//     }
// }

// obj.info()


// const o1 = {
//     firstName: 'Janny',
//     secondName: 'Nikolas',

// }
// const bindFunction = obj.info.bind(o1)
// bindFunction('111-11-1', 'janny@ua.by')



// const o2 = {
//     firstName: 'MArry',
//     secondName: 'KOCK',

// }
// obj.info.call(o2, '123-23-1', 'sabaca@goog.ro')

// const o3 = {
//     firstName: 'netero',
//     secondName: 'Isaac ',

// }

// obj.info.apply(o3, ['321-432-223', 'ishak@goog.tu'])

// ==================================================================
// Promise


// const promise = new Promise(function(resolve,reject){
//     setTimeout(() => reject('error'), 2000)
//     // setTimeout(() => reject('done!'), 2000)
// })
// console.log(promise);
// promise.then(
//     result => console.log(result),
//     // error => console.log(error)
// )
// .catch( error => console.log(error))
// .finally ( ()=> console.log('finally'))

// ===================================================================
// Asycn await



// const url = 'https://jsonplaceholder.typicode.com/users/1'

// const f = async () => {
//    await fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))
//     // .catch(err => console.log(err))
      
// }
// // f()

// const a =() => {
//     console.log('start');
//     f()
//     console.log('end');
// }
// // a()

// const err = () => {
//     throw 'some error =('
// }


// const tryCatch = () => {
//     try{
//         a()
//         // err()
//     } catch (error){
//         console.log(error)
//     } finally{
//         console.log('fianlly');
//     }
// }
// tryCatch()

// console.log('start');
// setTimeout(() => console.log('settimeout'), 0)
// console.log('end');










const usersUrl = 'https://jsonplaceholder.typicode.com/users'
async function getUsers() {
    let arr;
   await  fetch(usersUrl)
        .then(response => response.json())
        .then(users => arr = users)
        console.log(arr);
//     // return arr
}
getUsers()



const usersArray = getUsers()
console.log(usersArray);