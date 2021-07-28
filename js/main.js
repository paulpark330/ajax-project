var $championList = document.querySelector('#champion-list');
var $start = document.querySelector('.get-started');
var $intro = document.querySelector('.intro');

var allChampions = [];

var urlOne =
  'https://api.pandascore.co/lol/champions?token=_g8je6_IZ8WrEPjlCgB-PG2588hD3Ume9yISokmfKl3uP-h5gGc&page[size]=100&page[number]=1';
var urlEncodedOne = encodeURIComponent(urlOne);
var finalUrlOne = 'https://lfz-cors.herokuapp.com/?url=' + urlEncodedOne;

var urlTwo =
  'https://api.pandascore.co/lol/champions?token=_g8je6_IZ8WrEPjlCgB-PG2588hD3Ume9yISokmfKl3uP-h5gGc&page[size]=100&page[number]=2';
var urlEncodedTwo = encodeURIComponent(urlTwo);
var finalUrlTwo = 'https://lfz-cors.herokuapp.com/?url=' + urlEncodedTwo;

function getAPI(finalUrlOne, finalUrlTwo) {
  var xhr1 = new XMLHttpRequest();
  xhr1.open('GET', finalUrlOne);
  xhr1.responseType = 'json';
  xhr1.addEventListener('load', function () {
    for (let i = 0; i < xhr1.response.length; i++) {
      allChampions.push(xhr1.response[i]);
    }
  });
  xhr1.send();

  var xhr2 = new XMLHttpRequest();
  xhr2.open('GET', finalUrlTwo);
  xhr2.responseType = 'json';
  xhr2.addEventListener('load', function () {
    for (let i = 0; i < xhr2.response.length; i++) {
      allChampions.push(xhr2.response[i]);
    }
  });
  xhr2.send();
}

getAPI(finalUrlOne, finalUrlTwo);

function renderChamps() {
  var alphChamps = allChampions.sort((a, b) => (a.name > b.name ? 1 : -1));
  for (let i = 0; i < alphChamps.length; i++) {
    var img = document.createElement('img');
    var div = document.createElement('div');
    img.setAttribute('src', alphChamps[i].image_url);
    div.className = 'champ-img';
    div.appendChild(img);
    $championList.appendChild(div);
  }
  $start.className = 'get-started hidden';
  $intro.className = 'intro hidden';
}

$start.addEventListener('click', renderChamps);
