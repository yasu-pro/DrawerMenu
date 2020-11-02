"use strict";

const button = document.getElementById("js-drawer");
const drawer = document.getElementById("drawer__menu");

let isSlide = true;
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
  const clientReact = drawer.getBoundingClientRect();
  const x = clientReact.left;
  if (isSlide) {
    drawer.style.left = x + client_w + "px";
    isSlide = false;
    console.log(client_w + "px");
  } else {
    drawer.style.left = x - client_w + "px";
    isSlide = true;
  }
});
