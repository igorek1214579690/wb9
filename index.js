window.onload = load
let storage = window.localStorage
// console.log(storage);
// storage.setItem('maikl', 'ivanova@')

// let name = storage.getItem('maikl')
// console.log(name);
// storage.setItem ('city', 'Piter')

//  let city = storage.getItem('city')
//  console.log(storage.city);
// storage.city = 'New york'
// console.log(storage.city);

// console.log(storage['maikl'])

// let time = new Date()
// storage.setItem('time', time)
// console.log(time);

function load(){
    let firstName = document.getElementById('firstName')
    let secondName = document.getElementById('secondName')
    let email= document.getElementById('email')
    let info = document.getElementById('info')
    let rememberInfo = document.getElementById('rememberInfo')
    // console.log(storage);


    info.addEventListener('click', sub)
    rememberInfo.addEventListener('click', print)
    
}


function sub() {
        let n1 = name1.value
        let n2 = name2.value
        let e = email.value
        // console.log(n1 + n2 + email);
        storage.setItem('firstName', n1)
        storage.setItem('secondName', n2)
        storage.setItem('email', e)



    }

    function print(){
        user.innerHTML = 'info about user' + storage.firstName + '' + storage.secondName + 'mail' +
        storage.mail
    }