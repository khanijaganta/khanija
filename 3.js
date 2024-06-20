console.log('landscape portrait');

function isLandscape(width, height){
  // 3. ternary short syntax
  return (width > height);
}

let checkWidthHeight1 = isLandscape(754, 380);
console.log(checkWidthHeight1);

let checkWidthHeight2 = isLandscape(536, 647);
console.log(checkWidthHeight2);

let checkWidthHeight3 = isLandscape(5673, 358);
console.log(checkWidthHeight3);