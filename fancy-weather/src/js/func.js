export function convertKtoC(k){
  return Math.round(k-273.15);
}

export function convertKtoF(k){
  return (9/5)*(convertKtoC(k)+32);
}

export function convertCtoF(c){
  return (9/5)*(c+32);
}

export function convertFtoC(f){
  return (5/9)*(f-32);
}
