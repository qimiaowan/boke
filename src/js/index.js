import index from '../component/index/index';
import router from '../router/router';
import { routerChange } from '../tools/tool';

const oIndex = new index();
let fram = "";

const init = (() => {
    return new Promise((resolve, reject) => {
        fram = oIndex.tpl("首页","分类","归档","关于");
        resolve();
    })
});

init().then(() => {
    const header = document.querySelector("#header ul"),
          content = document.querySelector("#content");
    routerChange(router, content);

    header.addEventListener("click", oIndex.bind, false);
    window.addEventListener("hashchange", () => {
        if (window.location.hash.split("?").length <= 1) {
            routerChange(router, content);
            window.scrollTo(0, 0);
        }

    });
})

export default fram;