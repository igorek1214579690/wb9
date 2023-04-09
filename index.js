
// function getProducts(id){
//     return fetch(`https://dummyjson.com/products/1`,{
//         method: 'GET'
//     })
//     .then(res => res.json())
//     .then(json => console.log(json))
// }


// async function b() {
//     console.log('satrt');
//     await getProducts(obj.id)
//     const obj = await postProducts()
//     console.log(obj.id);
//     console.log('finish');
// }

// b()

// const newObj = {
//         "id": 1,
//         "title": "iPhone 9",
//         "description": "An apple mobile which is nothing like apple",
//         "price": 549,
//         "discountPercentage": 12.96,
//         "rating": 4.69,
//         "stock": 94,
//         "brand": "Apple",
//         "category": "smartphones",
//         "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//         "images":  "https://i.dummyjson.com/data/products/1/1.jpg",
      
// }

function postProducts() {
    return
}




const URL = 'https://asda-978f7-default-rtdb.firebaseio.com'

const userName = prompt('enter ur name')
const password = prompt('enter ur password')



function createUser(){
    return fetch(`${URL}/users.json`,{
        method: 'POST',
        body: JSON.stringify({
            name: userName,
            password
        })
    })
    .then(res => res.json)
    .then(json => json)
}

createUser()
