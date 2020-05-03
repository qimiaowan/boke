import './home.styl';
import tpl from './home.tpl';

export default () => {
    return {
        name: "home",
        tpl({ title, time, txt ,id} = item) {

            return tpl().replace(/{{(.*?)}}/g, (node, key) => {
                return {
                    title,
                    time,
                    txt,
                    id
                }[key];
            })
        },
        bind(e) {

            if (e.target.tagName.toLowerCase() == "a"&&e.target.classList.contains("out-a")) {
                e.preventDefault();
                window.location.hash = e.target.getAttribute("href");
            }


            }
    }
}