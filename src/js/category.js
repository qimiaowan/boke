import archives from '../component/archives/archives';
import dataJson from '../tools/data';
import { createEl } from '../tools/tool';

const oCategory = new archives();
let fram = `<div class="article"><h1 class="title">分类</h1><ul>`;


const init = (() => {
    return new Promise((resolve, reject) => {
        const goryObj = dataJson.reduce((prev, item) => {
            let tit = item.title.toLowerCase();
            let gory = tit.match(/(html)|(css)|(js)|(javascript)/g);
            if (gory) {
                if (gory[0] == "javascript") {
                    prev['js'].push(item);
                } else {
                    prev[gory[0]].push(item);

                }


            }
            return prev;
        }, {"html":[],"css":[],"js":[]})

        const elObj = createEl(goryObj);

        for (let prop in elObj) {
            fram+=oCategory.tpl(prop,elObj[prop]);
        }

        fram += `</ul></div>`;

        resolve();
    })
});



init()


export default fram;