"use strict";

const button = document.getElementById("button");
const drawer = document.getElementById("drawer");

let count = 0;
let loadDrawerPx = 0;
let firstPx = 0;
let isSlid = true;
let timeCount = 0;

const screen = function screen(toMove) {
  drawer.style.left = toMove + "px";
};

function getCoordinate() {
  button.disabled = true;
  //drawerの座標を取得
  const clientRect = drawer.getBoundingClientRect();
  //画面の左端から要素の左端までの距離
  const x = clientRect.left;
  //xの値はスクロール量によって変わってしまうので、スクロール量を追加
  loadDrawerPx = pageXOffset + x;
}

function countUp() {
  count += 50;
  if (isSlid == true) {
    fadeIn(count);
  } else {
    fadeOut(count);
  }
}

function fadeIn(getcount) {
  let toMove = 0;

  toMove = loadDrawerPx + getcount;
  if (toMove >= 0) {
    clearInterval(timeCount);
    count = 0;
    isSlid = false;
  }
  screen(toMove);
  toMove = 0;
}

function fadeOut(getcount) {
  let toMove = 0;

  toMove = loadDrawerPx - getcount;
  if (firstPx >= toMove) {
    clearInterval(timeCount);
    count = 0;
    isSlid = true;
  }
  screen(toMove);
  toMove = 0;
}

button.addEventListener("click", () => {
  let slideSpeed = 1;

  if (isSlid == true) {
    getCoordinate();

    firstPx = loadDrawerPx;

    countUp();
    button.disabled = false;
  } else {
    getCoordinate();

    countUp();
    button.disabled = false;
  }

  timeCount = setInterval(() => {
    countUp();
  }, slideSpeed);
});
