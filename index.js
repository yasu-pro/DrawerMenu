"use strict";

const button = document.getElementById("drawer__button");
const drawer = document.getElementById("drawer__menu");

let isSlid = true;
let client_w = 0;

window.addEventListener("load", () => {
  //drawerの座標を取得
  client_w = drawer.clientWidth;
  drawer.style.left = -client_w + "px";
  console.log(client_w);
});

drawer.addEventListener("resize", () => {
  //drawerの座標を取得
  client_w = drawer.clientWidth;
  drawer.style.left = -client_w + "px";
  console.log(client_w);
});

button.addEventListener("click", () => {
  let clientReact = drawer.getBoundingClientRect();
  let x = clientReact.left;
  if (isSlid === true) {
    drawer.style.left = x + client_w + "px";
    isSlid = false;
    console.log(client_w + "px");
  } else {
    drawer.style.left = x - client_w + "px";
    isSlid = true;
  }
});
