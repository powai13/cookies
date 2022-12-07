'use strict';

window.onload = function () {

    let cookie = document.cookie;
    console.log(cookie);

    // ボタンを押すと発火
    function push()  {

        // 入力したテキストを取得する
        const val = document.getElementById("inpText");
        cookie = cookie + "data1=" + val.value;
        console.log(cookie);
    }

    const btn = document.getElementById("btn");
    btn.addEventListener("click",push);
}
