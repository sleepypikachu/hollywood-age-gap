(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var overlay = document.querySelector('.contribute.overlay');
var i = 0;

function showSearch (e) {
  e.preventDefault();
  overlay.classList.remove('hidden');
}

function hideSearch (e) {
  e.preventDefault();
  overlay.classList.add('hidden');
}

function potentiallyHideSearch (e) {
  // Esc key is 27.
  if (e.key === 'Escape' || e.keyCode === 27) {
    hideSearch(e);
  }
}

var entryPoints = document.querySelectorAll('.contribute-button');
for (i = 0; i < entryPoints.length; i++) {
  var entry = entryPoints[i];
  entry.addEventListener('click', showSearch, false);
}

var exitPoints = document.querySelectorAll('.contribute .back');
for (i = 0; i < exitPoints.length; i++) {
  var exit = exitPoints[i];
  exit.addEventListener('click', hideSearch, false);
}

document.addEventListener('keyup', potentiallyHideSearch, false);

},{}],2:[function(require,module,exports){
require('./search');
require('./contribute');

},{"./contribute":1,"./search":3}],3:[function(require,module,exports){
var search = document.getElementById('search');
var cards = document.getElementsByClassName('card');
var searchableCardData = [];

for (var i = 0; i < cards.length; i++) {
  var card = cards[i];
  var titleEl = card.querySelector('h2');
  if (!titleEl) {
    continue;
  }
  var searchContext = {
    actorNames: [],
    card: card,
    title: titleEl.innerHTML,
    year: card.querySelector('.year').innerHTML
  };
  var actors = card.querySelectorAll('.actor .name');
  for (var j = 0; j < actors.length; j++) {
    searchContext.actorNames.push(actors.item(j).innerHTML);
  }
  searchableCardData.push(searchContext);
}

var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.setTimeout;
function doSearch (el) {
  var searchTerm = new RegExp(el.target.value, 'i');
  var show = [];
  var hide = [];

  for (var i = 0; i < searchableCardData.length; i++) {
    var data = searchableCardData[i];
    var hasMatch = false;
    if (searchTerm.test(data.title)) {
      hasMatch = true;
    } else if (searchTerm.test(data.year)) {
      hasMatch = true;
    } else {
      for (var j = 0; j < data.actorNames.length; j++) {
        if (searchTerm.test(data.actorNames[j])) {
          hasMatch = true;
          j = data.actorNames.length;
        }
      }
    }

    if (hasMatch) {
      show.push(data.card);
    } else {
      hide.push(data.card);
    }
  }

  raf(function () {
    var i;
    for (i = 0; i < show.length; i++) {
      show[i].classList.remove('hidden');
    }
    for (i = 0; i < hide.length; i++) {
      hide[i].classList.add('hidden');
    }
  });
}

search.addEventListener('keyup', doSearch, false);

function doClear () {
  search.value = '';
  for (var i = 0; i < searchableCardData.length; i++) {
    searchableCardData[i].card.classList.remove('hidden');
  }
}

var button = document.getElementsByClassName('clear')[0];
button.addEventListener('click', doClear, false);

},{}]},{},[2]);

//# sourceMappingURL=app.js.map
