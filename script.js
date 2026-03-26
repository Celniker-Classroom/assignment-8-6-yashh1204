// ----- Functions to implement -----

// 1) myFunc(): persistent counter
function myFunc() {
  num++;       // Increment the counter first
  return num;  // Then return it so the first call is 1, not 0
}

// 2) getRandomNum(max): 1..max int or 0 if invalid
function getRandomNum(max) {
  let m = parseInt(max);
  // Returns 0 if max is not a number (like "abc") or if it's less than 1
  if (isNaN(m) || m < 1) {
    return 0;
  }
  return Math.floor(Math.random() * m) + 1;
}

// 3) myAdder(x, y): numeric sum
function myAdder(x, y) {
  // Using parseFloat as recommended by the rubric
  return parseFloat(x) + parseFloat(y);
}

// 4) distance(x1, y1, x2, y2): Euclidean distance
function distance(x1, y1, x2, y2) {
  return Math.sqrt((parseFloat(x2) - parseFloat(x1)) ** 2 + (parseFloat(y2) - parseFloat(y1)) ** 2);
}

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0
function quadratic(a, b, c) {
  let numA = parseFloat(a);
  let numB = parseFloat(b);
  let numC = parseFloat(c);

  // Calculate the discriminant: b^2 - 4ac
  let disc = (numB * numB) - (4 * numA * numC);

  // Branch based on the discriminant
  if (disc > 0) {
    // Two real roots
    let r1 = (-numB + Math.sqrt(disc)) / (2 * numA);
    let r2 = (-numB - Math.sqrt(disc)) / (2 * numA);
    return [r1, r2];
  } else if (disc === 0) {
    // One real root
    return [-numB / (2 * numA)];
  } else {
    // Complex roots
    let real = -numB / (2 * numA);
    let imag = Math.sqrt(-disc) / (2 * numA);
    // Return formatted strings with "i"
    return [real + "+" + imag + "i", real + "-" + imag + "i"];
  }
}

// ----- Helpers -----
var num = 0;
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}