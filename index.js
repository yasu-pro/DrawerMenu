"use strict";

const button = document.getElementById("button");
const drawer = document.getElementById("drawer");

const count = 0;
button.addEventListener("click", () => {
  //drawerの座標を取得
  const clientRect = drawer.getBoundingClientRect();
  //画面の左端から要素の左端までの距離
  const x = clientRect.left;
  //xの値はスクロール量によって変わってしまうので、スクロール量を追加
  const px = pageXOffset + x;

  let i = 0;
  let moved = 0;
  function countUp() {
    i = i + 50;
    fadeIn();
    if (moved >= 0) {
      clearInterval(timeCount);
    }
  }

  function fadeIn() {
    moved = px + i;

    screen();
  }

  function screen() {
    drawer.style.left = moved + "px";
    console.log(moved);
  }

  const timeCount = setInterval(() => {
    countUp();
  }, 1);
});
