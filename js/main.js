var $championList = document.querySelector('#champion-list');
var $start = document.querySelector('.get-started');
var $intro = document.querySelector('.intro');
var $search = document.querySelector('.search');
var $comparisonList = document.querySelector('.comparison-list');
var $navFoot = document.querySelector('.nav-foot');
var $championContainer = document.querySelector('.champion-container');
var $comparisonContainer = document.querySelector('.comparison-container');

var $compImg = [];
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

function championDOMTree(champion) {
  var img = document.createElement('img');
  var div = document.createElement('div');
  var overlay = document.createElement('div');
  var plus = document.createElement('img');
  img.setAttribute('src', champion.image_url);
  div.className = 'champ-img';
  overlay.className = 'overlay';
  div.setAttribute('champ-name', champion.name.toLowerCase());
  plus.setAttribute('src', 'images/plus.png');
  plus.className = 'plus';
  div.appendChild(img);
  div.appendChild(overlay);
  overlay.appendChild(plus);
  return div;
}

function comparisonDOMTree(champion) {
  var img = document.createElement('img');
  var div = document.createElement('div');

  var overlay = document.createElement('div');
  var remove = document.createElement('img');
  img.setAttribute('src', champion.big_image_url);
  div.className = 'comp-img';

  div.setAttribute('champ-name', champion.name.toLowerCase());
  div.appendChild(img);
  div.appendChild(renderSelect());
  overlay.className = 'overlay-remove';
  remove.setAttribute('src', 'images/remove.png');
  remove.className = 'remove-icon';
  remove.setAttribute('champ-name', champion.name.toLowerCase());
  overlay.appendChild(remove);
  div.appendChild(overlay);
  return div;
}

function renderChamps() {
  var alphChamps = allChampions.sort((a, b) => (a.name > b.name ? 1 : -1));
  for (let i = 0; i < alphChamps.length; i++) {
    $championList.appendChild(championDOMTree(alphChamps[i]));
  }
  $start.className = 'get-started hidden';
  $intro.className = 'intro hidden';
  $search.className = 'search';
  $champImg = document.querySelectorAll('.champ-img');
}

function renderSelect() {
  var level = document.createElement('div');
  var select = document.createElement('select');
  var level1 = document.createElement('option');
  var level2 = document.createElement('option');
  var level3 = document.createElement('option');
  var level4 = document.createElement('option');
  var level5 = document.createElement('option');
  var level6 = document.createElement('option');
  var level7 = document.createElement('option');
  var level8 = document.createElement('option');
  var level9 = document.createElement('option');
  var level10 = document.createElement('option');
  var level11 = document.createElement('option');
  var level12 = document.createElement('option');
  var level13 = document.createElement('option');
  var level14 = document.createElement('option');
  var level15 = document.createElement('option');
  var level16 = document.createElement('option');
  var level17 = document.createElement('option');
  var level18 = document.createElement('option');
  level.className = 'level';
  level1.setAttribute('value', 'level1');
  level2.setAttribute('value', 'level2');
  level3.setAttribute('value', 'level3');
  level4.setAttribute('value', 'level4');
  level5.setAttribute('value', 'level5');
  level6.setAttribute('value', 'level6');
  level7.setAttribute('value', 'level7');
  level8.setAttribute('value', 'level8');
  level9.setAttribute('value', 'level9');
  level10.setAttribute('value', 'level10');
  level11.setAttribute('value', 'level11');
  level12.setAttribute('value', 'level12');
  level13.setAttribute('value', 'level13');
  level14.setAttribute('value', 'level14');
  level15.setAttribute('value', 'level15');
  level16.setAttribute('value', 'level16');
  level17.setAttribute('value', 'level17');
  level18.setAttribute('value', 'level18');
  level1.textContent = 'Level 1';
  level2.textContent = 'Level 2';
  level3.textContent = 'Level 3';
  level4.textContent = 'Level 4';
  level5.textContent = 'Level 5';
  level6.textContent = 'Level 6';
  level7.textContent = 'Level 7';
  level8.textContent = 'Level 8';
  level9.textContent = 'Level 9';
  level10.textContent = 'Level 10';
  level11.textContent = 'Level 11';
  level12.textContent = 'Level 12';
  level13.textContent = 'Level 13';
  level14.textContent = 'Level 14';
  level15.textContent = 'Level 15';
  level16.textContent = 'Level 16';
  level17.textContent = 'Level 17';
  level18.textContent = 'Level 18';
  level.appendChild(select);
  select.appendChild(level1);
  select.appendChild(level2);
  select.appendChild(level3);
  select.appendChild(level4);
  select.appendChild(level5);
  select.appendChild(level6);
  select.appendChild(level7);
  select.appendChild(level8);
  select.appendChild(level9);
  select.appendChild(level10);
  select.appendChild(level11);
  select.appendChild(level12);
  select.appendChild(level13);
  select.appendChild(level14);
  select.appendChild(level15);
  select.appendChild(level16);
  select.appendChild(level17);
  select.appendChild(level18);
  return level;
}

function renderStats() {
  console.log('hi');
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
      $comparisonList.appendChild(comparisonDOMTree(allChampions[i]));
    }
  }
  $compImg = document.querySelectorAll('.comp-img');
}

function removeChamps(event) {
  var target = event.target.getAttribute('champ-name');
  for (let i = 0; i < $compImg.length; i++) {
    if (target === $compImg[i].getAttribute('champ-name')) {
      $compImg[i].remove();
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

$comparisonList.addEventListener('click', removeChamps);
