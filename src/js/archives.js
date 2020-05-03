import archives from '../component/archives/archives';
import dataJson from '../tools/data';
import { createEl } from '../tools/tool';

const oArchives = new archives();
let fram = `<div class="article"><h1 class="title">归档</h1><ul>`;



const init = (() => {
    return new Promise((resolve, reject) => {
        const timeObj = dataJson.reduce((prev, item) => {
            let t = item.time.split("-").slice(0,-1).join("");
            if (prev[t]) {
                prev[t].push(item);
            } else {
                prev[t] = [item]
            }

            return prev;
        },{})

        const elObj = createEl(timeObj,true);

        for (let prop in elObj) {
            fram+=oArchives.tpl(prop,elObj[prop]);
        }

        fram += `</ul></div>`;

        resolve();
    })
});



init()

export default fram;