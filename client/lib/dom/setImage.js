export function setImage(target, src, alt = src) {
  target.src = `./client/assets/${src.toLowerCase()}.jpeg`;
  target.alt = alt;
}
