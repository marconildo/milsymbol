const strWidths = {
  0: 19,
  1: 19,
  2: 19,
  3: 19,
  4: 19,
  5: 19,
  6: 19,
  7: 19,
  8: 19,
  9: 19,
  " ": 10,
  "!": 10,
  '"': 12,
  "#": 19,
  $: 19,
  "%": 30,
  "&": 23,
  "'": 7,
  "(": 11,
  ")": 11,
  "*": 13,
  "+": 20,
  ",": 10,
  "-": 11,
  ".": 10,
  "/": 10,
  ":": 10,
  ";": 10,
  "<": 20,
  "=": 20,
  ">": 20,
  "?": 19,
  "@": 34,
  "{": 12,
  "|": 9,
  "}": 12,
  "~": 20,
  "[": 10,
  "]": 10,
  "^": 16,
  _: 19,
  "`": 11,
  A: 23,
  B: 23,
  C: 24,
  D: 24,
  E: 23,
  F: 21,
  G: 26,
  H: 24,
  I: 10,
  J: 17,
  K: 23,
  L: 19,
  M: 28,
  N: 24,
  O: 26,
  P: 23,
  Q: 26,
  R: 24,
  S: 23,
  T: 21,
  U: 24,
  V: 23,
  W: 32,
  X: 23,
  Y: 23,
  Z: 21,
  a: 19,
  b: 19,
  c: 17,
  d: 19,
  e: 19,
  f: 10,
  g: 19,
  h: 19,
  i: 8,
  j: 8,
  k: 17,
  l: 8,
  m: 28,
  n: 19,
  o: 19,
  p: 19,
  q: 19,
  r: 11,
  s: 17,
  t: 10,
  u: 19,
  v: 17,
  w: 24,
  x: 17,
  y: 17,
  z: 17,
  А: 23,
  а: 19,
  Б: 22,
  б: 19,
  В: 23,
  в: 18,
  Г: 18,
  г: 13,
  Д: 23,
  д: 20,
  Е: 23,
  е: 19,
  Ё: 23,
  ё: 19,
  Ж: 31,
  ж: 23,
  З: 20,
  з: 16,
  И: 24,
  и: 19,
  Й: 24,
  й: 19,
  К: 20,
  к: 15,
  Л: 22,
  л: 20,
  М: 28,
  м: 23,
  Н: 24,
  н: 19,
  О: 26,
  о: 19,
  П: 24,
  п: 18,
  Р: 23,
  р: 19,
  С: 24,
  с: 17,
  Т: 21,
  т: 16,
  У: 21,
  у: 17,
  Ф: 26,
  ф: 28,
  Х: 23,
  х: 17,
  Ц: 25,
  ц: 19,
  Ч: 22,
  ч: 18,
  Ш: 31,
  ш: 27,
  Щ: 31,
  щ: 28,
  Ъ: 27,
  ъ: 21,
  Ы: 30,
  ы: 24,
  Ь: 22,
  ь: 18,
  Э: 24,
  э: 17,
  Ю: 34,
  ю: 25,
  Я: 24,
  я: 18,
};

//Function to calculate the width of a string
export default function strWidth(str, fontSize, spaceTextIcon) {
  if (str.length == 0) return 0;
  //We need to calculate how long our string will be in pixels
  let w = 0;
  for (let i = 0; i < str.length; i++) {
    //If we dont know how wide the char is, set it to 28.5 that is the width of W and no char is wider than that.
    w += (fontSize / 30) * (strWidths[str[i]] ? strWidths[str[i]] : 28.5);
  }
  //This is for the space between the text and the symbol.
  w += spaceTextIcon;
  return w;
}
