import txt from '../component/txt/txt';
import dataJson from '../tools/data';

const oTxt = new txt();

let fram = "";

function txtFramFun() {
    let fram = "";
    if (window.location.hash.split("?").length>1) {
        let id = window.location.hash.split("?")[1].split("=")[1];

    dataJson.forEach((item) => {
        if (item.id == id) {
            fram+=oTxt.tpl(item)
        }
    })
    }
    return fram;
}

const init = (() => {
    return new Promise((resolve, reject) => {
        fram = txtFramFun();

        window.addEventListener("hashchange", () => {
            if (window.location.hash.split("?").length > 1) {
                content.innerHTML = txtFramFun();
                window.scrollTo(0, 0);
            }


        });

        resolve();
    })
});



init();


export default fram;
