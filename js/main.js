var $championList = document.querySelector('#champion-list');
var $start = document.querySelector('.get-started');
var $intro = document.querySelector('.intro');

var allChampions = [];

function getAPI(url) {
  var urlEncoded = encodeURIComponent(url);
  var finalUrl = 'https://lfz-cors.herokuapp.com/?url=' + urlEncoded;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', finalUrl);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    for (let i = 0; i < xhr.response.length; i++) {
      allChampions.push(xhr.response[i]);
    }
  });
  xhr.send();
}

getAPI(
  'https://api.pandascore.co/lol/champions?token=_g8je6_IZ8WrEPjlCgB-PG2588hD3Ume9yISokmfKl3uP-h5gGc&page[size]=100&page[number]=1'
);
getAPI(
  'https://api.pandascore.co/lol/champions?token=_g8je6_IZ8WrEPjlCgB-PG2588hD3Ume9yISokmfKl3uP-h5gGc&page[size]=100&page[number]=2'
);

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
