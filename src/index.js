import {PATH, location} from './shared/locations' 
import {links} from './shared/links'
import './style.scss';
import { getBoots, getJackets, getTrousers, getUnderpants } from './api/api-handlers';

window.onload = () => {
    const pathURL = window.location.pathname
    switch (pathURL) {
        case location.main:
            links()
            break;
        case location.page1:
            links()
            getJackets()
            break;
        case location.page2:
            links()
            getBoots()
            break;
        case location.page3:
            links()
            getTrousers()
            break;
        case location.page4:
            links()
            getUnderpants()
            break;
        default:
            window.location.href = PATH.main
            break;
        
    }
}