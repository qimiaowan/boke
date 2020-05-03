import './archives.styl';
import tpl from './archives.tpl';


export default () => {
    return {
        name: "archives",
        tpl(time,content) {
            return tpl().replace(/{{(.*?)}}/g, (node, key) => {
                return {
                    time,
                    content
                }[key];
            })
        }
    }
}