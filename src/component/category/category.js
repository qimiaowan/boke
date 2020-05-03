import './category.styl';
import tpl from './category.tpl'

export default () => {
    return {
        name: "category",
        tpl(time,content) {
            return tpl().replace(/{{(.*?)}}/g, (node, key) => {
                return {
                    time,
                    content
                }[key];
            })
        },
    }
}