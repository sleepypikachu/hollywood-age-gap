!function e(t,r,n){function a(i,c){if(!r[i]){if(!t[i]){var u="function"==typeof require&&require;if(!c&&u)return u(i,!0);if(o)return o(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var l=r[i]={exports:{}};t[i][0].call(l.exports,function(e){var r=t[i][1][e];return a(r?r:e)},l,l.exports,e,t,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)a(n[i]);return a}({1:[function(e,t,r){function n(e){e.preventDefault(),i.classList.remove("hidden")}function a(e){e.preventDefault(),i.classList.add("hidden")}function o(e){"Escape"!==e.key&&27!==e.keyCode||a(e)}var i=document.querySelector(".contribute.overlay"),c=0,u=document.querySelectorAll(".contribute-button");for(c=0;c<u.length;c++){var s=u[c];s.addEventListener("click",n,!1)}var l=document.querySelectorAll(".contribute .back");for(c=0;c<l.length;c++){var d=l[c];d.addEventListener("click",a,!1)}document.addEventListener("keyup",o,!1)},{}],2:[function(e,t,r){e("./search"),e("./contribute")},{"./contribute":1,"./search":3}],3:[function(e,t,r){function n(e){for(var t=new RegExp(e.target.value,"i"),r=[],n=[],a=0;a<c.length;a++){var o=c[a],i=!1;if(t.test(o.title))i=!0;else if(t.test(o.year))i=!0;else for(var u=0;u<o.actorNames.length;u++)t.test(o.actorNames[u])&&(i=!0,u=o.actorNames.length);i?r.push(o.card):n.push(o.card)}v(function(){var e;for(e=0;e<r.length;e++)r[e].classList.remove("hidden");for(e=0;e<n.length;e++)n[e].classList.add("hidden")})}function a(){o.value="";for(var e=0;e<c.length;e++)c[e].card.classList.remove("hidden")}for(var o=document.getElementById("search"),i=document.getElementsByClassName("card"),c=[],u=0;u<i.length;u++){var s=i[u],l=s.querySelector("h2");if(l){for(var d={actorNames:[],card:s,title:l.innerHTML,year:s.querySelector(".year").innerHTML},f=s.querySelectorAll(".actor .name"),m=0;m<f.length;m++)d.actorNames.push(f.item(m).innerHTML);c.push(d)}}var v=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.setTimeout;o.addEventListener("keyup",n,!1);var h=document.getElementsByClassName("clear")[0];h.addEventListener("click",a,!1)},{}]},{},[2]);