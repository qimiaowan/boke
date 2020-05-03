import './txt.styl';
import tpl from './txt.tpl';

export default () => {
    return {
        name: "txt",
        tpl({ title, time, txt } = item) {

            return tpl().replace(/{{(.*?)}}/g, (node, key) => {
                return {
                    title,
                    time,
                    txt
                }[key];
            })
        }
    }
}