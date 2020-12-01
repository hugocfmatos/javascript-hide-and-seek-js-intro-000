function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget() {
   return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
<<<<<<< HEAD
  const camel = document.querySelectorAll('ul.ranked-list li');
=======
  const camel = document
  .getElementByClassName('ranked-list')
  .querySelectorAll('ul.ranked-list li');

>>>>>>> 61f5fee9d49e953d4ed65124d6793e7910fe2de3
for (let i = 0; i < camel.length; i++) {
  camel[i].innerHTML = (parseInt(camel[i].innerHTML,10) + n).toString();
}
}
<<<<<<< HEAD


function deepestChild() {
  var crl = 'div#grand-node div'
  let current = document.querySelectorAll(crl)
  let new1 = current
  for (let i=0; i<current.length;i++) {
      if (new1.length===1) {
          return new1[0]
      } else {
        crl = crl + " div"
        new1 = document.querySelectorAll(crl)
      }
}
}
=======
>>>>>>> 61f5fee9d49e953d4ed65124d6793e7910fe2de3
