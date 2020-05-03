import home from '../js/home';
import category from '../js/category';
import archives from '../js/archives';
import about from '../js/about';
import txt from '../js/txt';



var router = {
    routes: [{
        path: '/home',
        component: home
    }, {
        path: '/category',
        component: category
    }, {
        path: '/archives',
        component: archives
    }, {
        path: '/about',
        component: about
    }, {
        path: '/txt',
        component: txt
        }, {
            path: '*',
            redirect: '/home'
    }]
}
export default router;