export function convertKtoC(k) {
  return Math.round(k - 273.15);
}

export function convertCtoF(c) {
  return ((9 / 5) * c) + 32;
}

export function convertKtoF(k) {
  return convertCtoF(convertKtoC(k));
}

export function convertFtoC(f) {
  return (5 / 9) * (f - 32);
}
