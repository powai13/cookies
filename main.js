'use strict';

window.onload = function () {

    // cookieが使用できるかどうか
    console.log(navigator.cookieEnabled);
    let cookie = document.cookie;
    console.log(cookie);

    // ボタンを押すと発火
    function push()  {

        // 入力したテキストを取得する
        const val = document.getElementById("inpText");
        cookie = "data1=1";
        console.log(cookie);
    }

    const btn = document.getElementById("btn");
    btn.addEventListener("click",push);
}
