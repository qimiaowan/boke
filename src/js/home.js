import home from '../component/home/home';
import dataJson from '../tools/data';
import { ft } from '../tools/tool';

const oHome = new home();
let fram = "";



const init = (() => {
    return new Promise((resolve, reject) => {
        dataJson.forEach((item) => {
            fram += oHome.tpl(ft(item));
        });
        resolve();
    })
});



init().then(() => {
    const content = document.querySelector("#content");
    content.addEventListener("click", oHome.bind, false);
})


export default fram;
