
import {getUser} from '../../api/api-handlers'
import {api} from '../../api/fake-api'


let users= []
export const user = async () => {
    await getUser(`${api}users`).then(res => users =res.users)
    const userFirstName = document.getElementById('user-firstName')
    const userSecondName = document.getElementById('user-secondName')
    const avatar = document.getElementById('avatar')
    avatar.style.width = '50px'
    avatar.style.height = '50px'
    avatar.style.borderRadius = '50%'
    console.log(users);

    users.forEach(el => {
        if(el.id == 14) {
            userFirstName.innerHTML = el.firstName;
            userSecondName.innerHTML = el.lastName;
            avatar.src = el.image
        }
    })


    // userFirstName.innerHTML = res.firstName;
    // userSecondName.innerHTML = res.lastName;
    // avatar.src = res.img
}





// export const user = async () => {
// const userFirstName = document.getElementById('user-firstName')
// const userSecondName = document.getElementById('user-secondName')
// const avatar = document.getElementById('avatar')
//     avatar.style.width = '50px'
//     avatar.style.height = '50px'
//     avatar.style.borderRadius = '50%'

// // await getUser().then(a => {
    // userFirstName.innerHTML = a.firstName
    // userSecondName.innerHTML = a.secondName
    // avatar.src = a.ava
// })

    // }