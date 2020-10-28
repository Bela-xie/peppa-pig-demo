import string from './css.js'

let player = {
    n: 0,
    time: 50,
    id: undefined,
    ui: {
        show: document.querySelector('#show'),
        style: document.querySelector('#style'),
    },
    init: () => {
        player.play();
        player.bindEvents();
    },
    eventsHash: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents: () => {
        let eventsHash = player.eventsHash;
        for (let key in eventsHash) {
            if (eventsHash.hasOwnProperty(key)) {
                document.querySelector(key).onclick = player[eventsHash[key]]
            }
        }
    },
    play: () => {
        player.id = setInterval(() => {
            player.n += 1;
            player.ui.show.innerText = string.substring(0, player.n);
            player.ui.style.innerHTML = string.substring(0, player.n);
            player.ui.show.scrollTop = player.ui.show.scrollHeight;
            if (player.n > string.length - 1) {
                clearInterval(player.id);
            }
        }, player.time);
    },
    pause: () => {
        clearInterval(player.id);
    },
    slow: () => {
        player.pause();
        player.time = 50;
        player.play();
    },
    normal: () => {
        player.pause();
        player.time = 20;
        player.play();
    },

    fast: () => {
        player.pause();
        player.time = 0;
        player.play();
    }
}
player.init();