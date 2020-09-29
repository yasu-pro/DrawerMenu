"use strict";

const button = document.getElementById("button");
const drawer = document.getElementById("drawer");

let px = 0;
let firstPx = 0;

const screen = function screen(moved) {
  drawer.style.left = moved + "px";
};

function getCoordinate() {
  button.disabled = true;
  //drawerの座標を取得
  const clientRect = drawer.getBoundingClientRect();
  //画面の左端から要素の左端までの距離
  const x = clientRect.left;
  //xの値はスクロール量によって変わってしまうので、スクロール量を追加
  px = pageXOffset + x;
}

button.addEventListener("click", () => {
  let onOff = true;

  if (onOff == true) {
    let moved = 0;

    onOff = false;
    console.log(onOff);

    getCoordinate();
    firstPx = px;

    let count = 0;
    function countUp() {
      count = count + 50;
      fadeIn();
    }

    function fadeIn() {
      moved = px + count;
      if (moved >= 0) {
        clearInterval(timeCount);
        button.disabled = false;
      }
      screen(moved);
    }

    const timeCount = setInterval(() => {
      countUp();
    }, 1);
  } else if (onOff == false) {
    onOff = true;

    let moved = 0;
    console.log("true");

    getCoordinate();

    let count = 0;
    function countUp() {
      count = count + 50;
      fadeOut();
    }

    function fadeOut() {
      moved = px + count;
      if (firstPx <= moved) {
        clearInterval(timeCount);
        button.disabled = false;
      }
      screen(moved);
    }

    const timeCount = setInterval(() => {
      countUp();
    }, 1);
  }
});
