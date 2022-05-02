// ==UserScript==
// @name         Youtube Disable Recommended Video
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Youtube Disable Recommended Video
// @author       MaiLy Dao
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updateURL    https://raw.githubusercontent.com/maily89/DistractionRemover/main/youtube.js
// @downloadURL  https://raw.githubusercontent.com/maily89/DistractionRemover/main/youtube.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /*window.addEventListener('load', function () {
       disableYoutubeRelated();
    });*/
    setTimeout(cleanYoutube, "5000");
})();

function matchDomain (domains) {
  const hostname = window.location.hostname;
  if (typeof domains === 'string') { domains = [domains]; }
  return domains.some(domain => hostname === domain || hostname.endsWith('.' + domain));
}

function cleanYoutube() {
   hideItem('related');

   hideItem('comments');

   //hide browsing in home page
    document.querySelector('ytd-browse').style.display='none';
}

function hideItem(id) {
    var item = document.getElementById(id);
    item.style.display = "none";
}
