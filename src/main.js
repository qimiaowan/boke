import './css/public.styl';  //公共的css文件
import fram from './js/index' //公共的头尾

const init = (() => {
    const oWrap = document.querySelector("#wrap");
    return new Promise((resolve, reject) => {
        oWrap.innerHTML = fram;
        resolve();
    })
});

init().then(() => {
    console.log("加载完成");
})