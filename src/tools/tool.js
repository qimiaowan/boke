const routerChange = (router,content) => {
    let nowHash = window.location.hash;
    let index = router.routes.findIndex((item, index) => {
        if (nowHash.includes("?id=")) {
            return nowHash.includes(('#' + item.path))
        } else {
            return nowHash == ('#' + item.path)
        }

    });
    if (index >= 0) {
        console.log(router.routes[index].component);

        content.innerHTML = router.routes[index].component;
    } else {
        let defaultIndex = router.routes.findIndex((item, index) => {
            return item.path == '*';
        });
        if (defaultIndex >= 0) {
            window.location.hash = router.routes[defaultIndex].redirect;
        }
    }
};

const ft = (item) => {
    let itemClone = JSON.parse(JSON.stringify(item)),
        h = itemClone.txt.match(/(<.*?>.*?<\/.*?>)/g)||[],
        str = "";

        if (itemClone.txt && itemClone.txt.length > 200) {

            if (h.length > 0) {
                for (let i = 0; i < h.length; i++){
                    if (str.length < 200) {
                        str += h[i];
                    }
                }
                itemClone.txt = str + "...";
            } else {
                itemClone.txt = itemClone.txt.slice(0, 150)+"...";
            }
    }
    return itemClone;
}

const createEl = (timeObj,bool) => {
    const obj = {};
    const timeObjKeys = Object.keys(timeObj);
    const timeObjClone = bool ? timeObjKeys.sort((a, b) => b - a) : timeObjKeys;
    console.log(timeObjClone);

    timeObjClone.forEach((item) => {
        let cont = "",
             itemTime;
        cont += `<ul>`;

        if (timeObj[item].length > 1) {
            timeObj[item].forEach((a) => {
                cont+=`<li><a class='out-a' href=/txt?id=${a.id}>${a.title}</a></li>`
            })
        } else {
            cont += `<li><a class='out-a' href=/txt?id=${timeObj[item][0].id}>${timeObj[item][0].title}</a></li>`;
        }
        cont += `</ul>`;

        if (bool) {
            itemTime = timeObj[item][0].time.split("-").slice(0, -1).join(" 年 ") + " 月 ";
        } else {
            itemTime = item;
        }



        obj[itemTime] = cont;
    })

    return obj;
}


export {
    routerChange,
    ft,
    createEl
}