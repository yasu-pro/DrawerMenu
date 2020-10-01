"use strict";

const button = document.getElementById("button");
const drawer = document.getElementById("drawer");

let count = 0;
let drawerPx = 0;
let firstPx = 0;
let onOff = true;
let timeCount = "";

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
  drawerPx = pageXOffset + x;
}

function countUp() {
  count += 50;
  if (onOff == true) {
    fadeIn(count);
  } else if (onOff == false) {
    fadeOut(count);
  }
}

function fadeIn(getcount) {
  let moved = 0;

  moved = drawerPx + getcount;
  if (moved >= 0) {
    clearInterval(timeCount);
    count = 0;
    onOff = false;
  }
  screen(moved);
  moved = 0;
}

function fadeOut(getcount) {
  let moved = 0;

  moved = drawerPx - getcount;
  if (firstPx >= moved) {
    clearInterval(timeCount);
    count = 0;
    onOff = true;
  }
  screen(moved);
  moved = 0;
}

button.addEventListener("click", () => {
  if (onOff == true) {
    getCoordinate();

    firstPx = drawerPx;

    countUp();
    button.disabled = false;
  } else if (onOff == false) {
    getCoordinate();

    countUp();
    button.disabled = false;
  }

  timeCount = setInterval(() => {
    countUp();
  }, 1);
});
