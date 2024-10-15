// ==UserScript==
// @name         YouTube Music Album Cover Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove album covers from YouTube Music
// @match        https://music.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeAlbumCovers() {
        // Select all elements that might contain album covers
        const albumCovers = document.querySelectorAll('img.ytmusic-player-bar, yt-img-shadow img');

        albumCovers.forEach(cover => {
            cover.style.display = 'none';
        });

        // Adjust the layout to account for removed album covers
        const playerBar = document.querySelector('ytmusic-player-bar');
        if (playerBar) {
            playerBar.style.paddingLeft = '0';
        }
    }

    // Run the function immediately
    removeAlbumCovers();

    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(removeAlbumCovers);

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });
})();
