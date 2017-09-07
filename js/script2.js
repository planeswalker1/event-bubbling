const outer = document.querySelector('.outer');
console.log(outer);
const inner = document.querySelector('.inner');
const reset = document.querySelector('button');


function onOuterClick() {
  outer.classList.add('selected');
  console.log('Outer clicked!');
}

function onInnerClick(event) {
  inner.classList.add('selected');
  console.log('Inner clicked!');
}

function onResetClick() {
  inner.classList.remove('selected');
  outer.classList.remove('selected');
}

outer.addEventListener('click', onOuterClick);
inner.addEventListener('click', onInnerClick);
reset.addEventListener('click', onResetClick);
