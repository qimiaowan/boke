import './index.styl';
import tpl from './index.tpl';

export default () => {
    return {
        name: 'index',
        tpl(home,category,archives,about) {
            return tpl().replace(/{{(.*?)}}/g, (node, key) => {
                return {
                    home,
                    category,
                    archives,
                    about
                }[key];
            })
        },
        bind(e) {
            if (e.target.tagName.toLowerCase() != "a") {
                return
            }
            e.preventDefault();

            window.location.hash = e.target.getAttribute("href");

            }
        }
    }


