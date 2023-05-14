
// export const getUser = async(api) => {
//     return fetch(api)
//         .then(res => res.json())
// } 

import axios from "axios"

const db_url = 'https://asda-978f7-default-rtdb.firebaseio.com'

   export const getJackets = () => {
        return axios.get(`${db_url}/jacket.json`)
        .then(res => {
            const jacket = Object.keys(res.data)
            .map( key => ({...res.data[key]}))
            
            
                for (let i = 0; i < jacket.length; i++) {
                    console.log(jacket[i]);
                    const jack = document.getElementById('jacket')
                    const card = document.createElement('div')
                    card.classList.add('card')
                    
                    const price = document.createElement('h4')
                    const link = document.createElement('div')
                    link.classList.add('pic')
                    const description = document.createElement('p')
                    const title = document.createElement('h2')
                    const btn = document.createElement('button')
                    btn.innerText = 'Add to card'

                    btn.onclick = () => {
                        console.log(jacket[i]);
                    }
                    
                    link.style.backgroundImage = `url('${jacket[i].link}')`
                    title.innerText = jacket[i].title
                    description.innerText = jacket[i].description
                    price.innerText = jacket[i].price
                    


                    btn.onclick = () => {
                        const ls =  JSON.parse(localStorage.getItem('card'))
                        ls.push(jacket[i])
                        localStorage.clear()
                        localStorage.setItem('card', JSON.stringify(ls))
                    }

                    card.append(
                        title,
                        link,
                        description,
                        price,
                        btn
                        )
                    jack.append(card)
                }
                
                
                
        })
    }




    export const getBoots = () => {
        return axios.get(`${db_url}/boots.json`)
        .then(res => {
            // console.log(res.data);
            const boots = Object.keys(res.data).map( key => ({...res.data[key]}))
            console.log(boots);
            
                for (let i = 0; i < boots.length; i++) {
                    const bootDiv = document.getElementById('boots')
                    console.log(boots[i]);
                    const card = document.createElement('div')
                    card.classList.add('card')
                    
                    const price = document.createElement('h4')
                    const link = document.createElement('div')
                    link.classList.add('pic')
                    const description = document.createElement('p')
                    const title = document.createElement('h2')
                    const btn = document.createElement('button')
                    btn.innerText = 'Add to card'

                    btn.onclick = () => {
                        console.log(boots[i]);
                    }
                    
                    title.innerText = boots[i].title
                    link.style.backgroundImage = `url('${boots[i].link}')`
                    description.innerText = boots[i].description
                    price.innerText = boots[i].price

                    

                    card.append(
                        title,
                        link,
                        description,
                        price,
                        btn
                        )
                        bootDiv.append(card)
                }
        
        })
    }





    export const getTrousers = () => {
        return axios.get(`${db_url}/trousers.json`)
        .then(res => {
            // console.log(res.data);
            const trousers = Object.keys(res.data).map( key => ({...res.data[key]}))
            console.log(trousers);
            
                for (let i = 0; i < trousers.length; i++) {
                    const trousersDiv = document.getElementById('trousers')
                    console.log(trousers[i]);
                    const card = document.createElement('div')
                    card.classList.add('card')
                    
                    const price = document.createElement('h4')
                    const link = document.createElement('div')
                    link.classList.add('pic')
                    const description = document.createElement('p')
                    const title = document.createElement('h2')
                    const btn = document.createElement('button')
                    btn.innerText = 'Add to card'

                    btn.onclick = () => {
                        console.log(trousers[i]);
                    }
                    
                    title.innerText = trousers[i].title
                    link.style.backgroundImage = `url('${trousers[i].link}')`
                    description.innerText = trousers[i].description
                    price.innerText = trousers[i].price

                    btn.onclick = () => {
                        const ls =  JSON.parse(localStorage.getItem('card'))
                        ls.push(jacket[i])
                        localStorage.clear()
                        localStorage.setItem('card', JSON.stringify(ls))
                    }


                    card.append(
                        title,
                        link,
                        description,
                        price,
                        btn
                        )
                        trousersDiv.append(card)
                }
        
        })
    }




    export const getUnderpants= () => {
        return axios.get(`${db_url}/underpants.json`)
        .then(res => {
            // console.log(res.data);
            const underpants = Object.keys(res.data).map( key => ({...res.data[key]}))
            console.log(underpants);
            
                for (let i = 0; i < underpants.length; i++) {
                    const underpantsDiv = document.getElementById('underpants')
                    console.log(underpants[i]);
                    const card = document.createElement('div')
                    card.classList.add('card')
                    
                    const price = document.createElement('h4')
                    const link = document.createElement('div')
                    link.classList.add('pic')
                    const description = document.createElement('p')
                    const title = document.createElement('h2')
                    const btn = document.createElement('button')
                    btn.innerText = 'Add to card'

                    btn.onclick = () => {
                        console.log(underpants[i]);
                    }
                    
                    title.innerText = underpants[i].title
                    link.style.backgroundImage = `url('${underpants[i].link}')`
                    description.innerText = underpants[i].description
                    price.innerText = underpants[i].price

                    btn.onclick = () => {
                        const ls =  JSON.parse(localStorage.getItem('card'))
                        ls.push(jacket[i])
                        localStorage.clear()
                        localStorage.setItem('card', JSON.stringify(ls))
                    }


                    card.append(
                        title,
                        link,
                        description,
                        price,
                        btn
                        )
                        underpantsDiv.append(card)
                }
        
        })
    }

export const card = () => {
    const lsArr = JSON.parse(localStorage.getItem('card'))
    console.log(lsArr);

    const cardDiv = document.getElementById('from-card')

    for (let i = 0; i < lsArr.length; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        
        const price = document.createElement('h4')
        const link = document.createElement('div')
        link.classList.add('pic')
        const description = document.createElement('p')
        const title = document.createElement('h2')
        const btn = document.createElement('button')
        const btnClear = document.createElement('button')
        btn.innerText = 'Add to card'

        // btn.onclick = () => {
        //     console.log(underpants[i]);
        // }
        
        title.innerText = lsArr[i].title
        link.style.backgroundImage = `url('${lsArr[i].link}')`
        description.innerText = lsArr[i].description
        price.innerText = lsArr[i].price

        btn.onclick = () => {
            const ls =  JSON.parse(localStorage.getItem('card'))
            ls.push(jacket[i])
            localStorage.clear()
            localStorage.setItem('card', JSON.stringify(ls))
        }




        card.append(
            title,
            link,
            description,
            price,
            btn
        )
            cardDiv.append(card)

    }
}