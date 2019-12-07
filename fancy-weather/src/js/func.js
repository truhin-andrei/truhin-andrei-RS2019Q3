export function convertKtoC(k){
  return Math.round(k-273.15);
}

export function convertKtoF(k){
  return (9/5)*(convertKtoC(k)+32);
}