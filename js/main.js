var $championList = document.querySelector('#champion-list');

var allChampions = [];

var urlOne =
  'https://api.pandascore.co/lol/champions?token=_g8je6_IZ8WrEPjlCgB-PG2588hD3Ume9yISokmfKl3uP-h5gGc&page[size]=100&page[number]=1';
var urlEncodedOne = encodeURIComponent(urlOne);
var finalUrlOne = 'https://lfz-cors.herokuapp.com/?url=' + urlEncodedOne;

var urlTwo =
  'https://api.pandascore.co/lol/champions?token=_g8je6_IZ8WrEPjlCgB-PG2588hD3Ume9yISokmfKl3uP-h5gGc&page[size]=100&page[number]=2';
var urlEncodedTwo = encodeURIComponent(urlTwo);
var finalUrlTwo = 'https://lfz-cors.herokuapp.com/?url=' + urlEncodedTwo;

function getpageOne() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', finalUrlOne);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    for (let i = 0; i < xhr.response.length; i++) {
      allChampions.push(xhr.response[i]);
    }
  });

  xhr.send();
}

function getpageTwo() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', finalUrlTwo);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    for (let i = 0; i < xhr.response.length; i++) {
      allChampions.push(xhr.response[i]);
    }
  });

  xhr.send();
}

getpageOne();
getpageTwo();

for (let i = 0; i < allChampions.length; i++) {
  var img = document.createElement('img');
  var div = document.createElement('div');
  img.setAttribute('src', allChampions[i].image_url);
  div.className = 'champ-img';
  div.appendChild(img);
  $championList.appendChild(div);
}
