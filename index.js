"use strict";

const button = document.getElementById("drawer__button");
const drawer = document.getElementById("drawer__menu");

let movingDistance = 0;
let loadDrawerPx = 0;
let firstPx = 0;
let isSlid = true;
let timeCount = 0;

const screen = function screen(newDrawerPx) {
  drawer.style.left = newDrawerPx + "px";
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
  movingDistance += 50;
  if (isSlid == true) {
    fadeIn(movingDistance);
  } else {
    fadeOut(movingDistance);
  }
}

function fadeIn(movedDistance) {
  let newDrawerPx = 0;

  newDrawerPx = loadDrawerPx + movedDistance;
  if (newDrawerPx >= 0) {
    clearInterval(timeCount);
    movingDistance = 0;
    isSlid = false;
  }
  screen(newDrawerPx);
  newDrawerPx = 0;
}

function fadeOut(movedDistance) {
  let newDrawerPx = 0;

  newDrawerPx = loadDrawerPx - movedDistance;
  if (firstPx >= newDrawerPx) {
    clearInterval(timeCount);
    movingDistance = 0;
    isSlid = true;
  }
  screen(newDrawerPx);
  newDrawerPx = 0;
}

button.addEventListener("click", () => {
  let millisecond = 1;

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
  }, millisecond);
});
