const link = document.getElementById('link')
const title = document.getElementById('title')
const description = document.getElementById('description')
const price = document.getElementById('price')
const product = document.getElementById('product')
const btn = document.querySelector('.click')

const db_url = 'https://asda-978f7-default-rtdb.firebaseio.com'

btn.onclick =  ()  => {
    const data = { 
        link: link.value,
        title: title.value,
        description: description.value,
        price: price.value
    }   
    console.log(data);

    link.value = ''
    title.value = ''
    description.value = ''
    price.value = ''

    return fetch(`${db_url}/${product.value}.json`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .catch( error => {
        console.log(error);
    } )
}