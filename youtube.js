// ==UserScript==
// @name         Distraction Removal
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Distraction Removal
// @author       MaiLy Dao
// @match      https://www.youtube.com/*
// @match      https://www.facebook.com/*
// @include      http://facebook.com/*
// @include      http://*.facebook.com/*
// @include      https://facebook.com/*
// @include      https://*.facebook.com/*
// @include      http://facebook.com/*/*
// @include      http://*.facebook.com/*/*
// @include      https://facebook.com/*/*
// @include      https://*.facebook.com/*/*
// @include      http://facebook.com/*/*/*
// @include      http://*.facebook.com/*/*/*
// @include      https://facebook.com/*/*/*
// @include      https://*.facebook.com/*/*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updateURL    https://raw.githubusercontent.com/maily89/DistractionRemover/main/youtube.js
// @downloadURL  https://raw.githubusercontent.com/maily89/DistractionRemover/main/youtube.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (matchDomain("facebook.com")) {
        window.setInterval(playBell, 1000);
    }

    window.addEventListener('load', function () {
       cleanYoutube();
       cleanFacebook();
    });

    setTimeout(cleanYoutube, "5000");
    setTimeout(cleanFacebook, "100");

    window.setInterval(function(){
        cleanFacebook();
    }, 5000);
})();

var sound = new Audio("https://plumvillage.org/wp-content/uploads/2020/04/medium_bell_wake_plus_full.mp3");

function playBell() {
    sound.play();
}

function cleanFacebook() {
    document.getElementsByClassName("mbl")[0].parentNode.removeChild(document.getElementsByClassName("mbl")[0]);
    if (window.location.pathname === "/") {
        document.querySelectorAll('[role="feed"]').forEach(el => hideItem(el));
    } else {
        document.querySelectorAll('[role="feed"]').forEach(function(el) {
            el.style.overflow = "hidden";
            el.style.height = "500vh";
        });
    }
}

function matchDomain (domains) {
  const hostname = window.location.hostname;
  if (typeof domains === 'string') { domains = [domains]; }
  return domains.some(domain => hostname === domain || hostname.endsWith('.' + domain));
}

function cleanYoutube() {
   hideItemById('related');

   hideItemById('comments');

   //hide browsing in home page
    document.querySelector('ytd-browse').style.display='none';
}

function hideItemById(id) {
    var item = document.getElementById(id);
    hideItem(item);
}

function hideItem(item) {
    if (item) {
        item.style.display = "none";
    }
}
