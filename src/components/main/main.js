import{api} from '../../api/api';
import axios from 'axios';


const add = document.getElementById('add')

const post = async () => {
    const postObj = await axios.post(`${api.db}/user.json`, {
        username: 'lol',
        password: 42
    });
    return console.log(postObj);
}

add.onclick = () => {
    // post()
    console.log('ll');
}
