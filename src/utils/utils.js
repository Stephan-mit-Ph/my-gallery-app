export function getNewHeight(width, height, size) {
  const ratio = width / height;
  return ratio * size;
}
