function showOne() {
  let x = document.getElementById('display').value;
  document.getElementById('display').value = x + '1';
}

function showTwo() {
  let x = document.getElementById('display').value;
  document.getElementById('display').value = x + '2';
}

function showThree() {
  let x = document.getElementById('display').value;
  document.getElementById('display').value = x + '3';
}

function showFour() {
  let x = document.getElementById('display').value;
  document.getElementById('display').value = x + '4';
}

function showFive() {
  let x = document.getElementById('display').value;
  document.getElementById('display').value = x + '5';
}

function showSix() {
  let x = document.getElementById('display').value;
  document.getElementById('display').value = x + '6';
}

function showSeven() {
  let x = document.getElementById('display').value;
  document.getElementById('display').value = x + '7';
}

function showEight() {
  let x = document.getElementById('display').value;
  document.getElementById('display').value = x + '8';
}

function showNine() {
  let x = document.getElementById('display').value;
  document.getElementById('display').value = x + '9';
}

function showZero() {
  let x = document.getElementById('display').value;
  document.getElementById('display').value = x + '0';
}

function doAdd() {
  let x = document.getElementById('display').value;
  document.getElementById('display').value = x + '+';
}

function doMinus() {
  let x = document.getElementById('display').value;
  document.getElementById('display').value = x + '-';
}

function doMultiplication() {
  let x = document.getElementById('display').value;
  document.getElementById('display').value = x + '*';
}

function doDivide() {
  let x = document.getElementById('display').value;
  document.getElementById('display').value = x + '/';
}

function doEquals() {
  let x = eval(document.getElementById('display').value);
  document.getElementById('display').value =
    Math.round(x * Math.pow(10, 8)) / Math.pow(10, 8);
}

function doClear() {
  document.getElementById('display').value = '';
}

function mClear() {
  document.getElementById('mDisplay').value = '';
}

function mSave() {
  let a = document.getElementById('display').value;
  document.getElementById('mDisplay').value = a;
}

function mRet() {
  let a = document.getElementById('mDisplay').value;
  document.getElementById('display').value = a;
}

function mPlus() {
  let a = eval(document.getElementById('display').value);
  let b = eval(document.getElementById('mDisplay').value);
  let c = a + b;

  document.getElementById('mDisplay').value = c;
}

function mMinus() {
  let a = document.getElementById('display').value;
  let b = document.getElementById('mDisplay').value;
  let c = b - a;

  document.getElementById('mDisplay').value = c;
}

function dot() {
  let x = document.getElementById('display').value;

  document.getElementById('display').value = x + '.';
}

function bspace() {
  let str = document.getElementById('display').value;
  let $str = str.length - 1;
  let shw = str.substr(0, $str);

  document.getElementById('display').value = shw;
}
