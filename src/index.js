import {PATH, location} from './shared/locations' 
import {links} from './shared/links'
import './style.scss';
import { getItems } from './api/api-handlers';

window.onload = () => {
    const pathURL = window.location.pathname
    switch (pathURL) {
        case location.main:
            links()
            break;
        case location.page1:
            links()
            getItems()
            break;
        case location.page2:
            links()
            break;
        case location.page3:
            links()
            break;
        case location.page4:
            links()
            break;
        default:
            window.location.href = PATH.main
            break;
        
    }
}