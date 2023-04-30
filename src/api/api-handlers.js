
// export const getUser = async(api) => {
//     return fetch(api)
//         .then(res => res.json())
// } 

import axios from "axios"

const db_url = 'https://asda-978f7-default-rtdb.firebaseio.com'

   export const getItems = () => {
        return axios.get(`${db_url}/jacket.json`)
        .then(res => {
            const jacket = Object.keys(res.data)
            .map( key => ({...res.data[key]}))
            
            
                for (let i = 0; i < jacket.length; i++) {
                    console.log(jacket[i]);
                    const jack = document.getElementById('jacket')
                    const card = document.createElement('div')
                    
                    const price = document.createElement('p')
                    const link = document.createElement('div')
                    link.classList.add('pic')
                    const description = document.createElement('p')
                    const title = document.createElement('h2')
                    
                    link.style.backgroundImage = `url('${jacket[i].link}')`
                    title.innerText = jacket[i].title
                    description.innerText = jacket[i].description
                    price.innerText = jacket[i].price

                    card.append(
                        title,
                        link,
                        description,
                        price
                        )
                    jack.append(card)
                }
                
                
                
        })
    }