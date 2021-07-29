var $championList = document.querySelector('#champion-list');
var $start = document.querySelector('.get-started');
var $intro = document.querySelector('.intro');
var $search = document.querySelector('.search');
var $comparisonList = document.querySelector('.comparison-list');
var $navFoot = document.querySelector('.nav-foot');
var $championContainer = document.querySelector('.champion-container');
var $comparisonContainer = document.querySelector('.comparison-container');

var $champImg = [];
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
    var overlay = document.createElement('div');
    var plus = document.createElement('img');
    img.setAttribute('src', alphChamps[i].image_url);
    div.className = 'champ-img';
    overlay.className = 'overlay';
    div.setAttribute('champ-name', alphChamps[i].name.toLowerCase());
    plus.setAttribute('src', 'images/plus.png');
    plus.className = 'plus';
    div.appendChild(img);
    div.appendChild(overlay);
    overlay.appendChild(plus);
    $championList.appendChild(div);
  }
  $start.className = 'get-started hidden';
  $intro.className = 'intro hidden';
  $search.className = 'search';
  $champImg = document.querySelectorAll('.champ-img');
}

function searchChamps(event) {
  for (let i = 0; i < $champImg.length; i++) {
    var searchString = $search.value.toLowerCase();
    if ($champImg[i].getAttribute('champ-name').includes(searchString)) {
      $champImg[i].className = 'champ-img';
    } else {
      $champImg[i].className = 'champ-img hidden';
    }
  }
}

function addChamps(event) {
  var target = event.target.parentNode.parentNode.getAttribute('champ-name');
  for (let i = 0; i < allChampions.length; i++) {
    if (target === allChampions[i].name.toLowerCase()) {
      var img = document.createElement('img');
      var div = document.createElement('div');
      var overlay = document.createElement('div');
      var remove = document.createElement('img');
      img.setAttribute('src', allChampions[i].big_image_url);
      div.className = 'comp-img';
      div.setAttribute('champ-name', allChampions[i].name.toLowerCase());
      div.appendChild(img);
      overlay.className = 'overlay-remove';
      remove.setAttribute('src', 'images/remove.png');
      overlay.appendChild(remove);
      div.appendChild(overlay);
      $comparisonList.appendChild(div);
    }
  }
}

function switchView(event) {
  var dataView = event.target.getAttribute('data-view');
  if (dataView === 'champion') {
    $championContainer.className = 'champion-container';
    $comparisonContainer.className = 'comparison-container hidden';
    $search.className = 'search';
  } else if (dataView === 'comparison') {
    $championContainer.className = 'champion-container hidden';
    $comparisonContainer.className = 'comparison-container';
    $search.className = 'search hidden';
  }

}

$start.addEventListener('click', renderChamps);

$search.addEventListener('input', searchChamps);

$championList.addEventListener('click', addChamps);

$navFoot.addEventListener('click', switchView);
