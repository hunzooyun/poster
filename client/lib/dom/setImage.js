export function setImage(target, src, alt = src) {
  target.src = `./assets/${src.toLowerCase()}.jpeg`;
  target.alt = alt;
}
