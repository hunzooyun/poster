import { data } from "./data.js";
import { getNode, setBgColor, setImage, setNameText } from "/client/lib/index.js";
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
const nav = getNode(".nav");
const img = getNode(".visual img");
const audio = getNode(".visual audio");
const nickName = getNode(".nickName");

function handler(e) {
  e.preventDefault();

  const target = e.target.closest("li");
  const list = [...this.children[0].children];

  if (!target) return;
  const index = target.dataset.index;
  const { color, name, alt } = data[index - 1];
  list.forEach((li) => li.classList.remove("is-active"));
  setBgColor(color);
  setImage(img, name, alt);
  setNameText(nickName, name);
  target.classList.add("is-active");
}

nav.addEventListener("click", handler);
