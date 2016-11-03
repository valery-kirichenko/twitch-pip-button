// ==UserScript==
// @name        Twitch PiP button
// @namespace   https://github.com/valera5505
// @description Add picutre in picture button to twitch.tv player. Only for macOS 10.12+
// @author      Valery Kirichenko
// @homepage    https://github.com/valera5505/twitch-pip-button
// @match      http://www.twitch.tv/*
// @match      http://player.twitch.tv/*
// @version     1.0
// @grant       none
// ==/UserScript==

var playerReady = setInterval(function() {
	if (document.querySelector("div.player-buttons-right")) {
		clearInterval(playerReady);
		setTimeout(function() {
			var css = document.createElement("link");
			css.rel = "stylesheet";
			css.href = "https://cdn.rawgit.com/valera5505/twitch-pip-button/master/style.css";
			document.getElementsByTagName("head")[0].appendChild(css);

			var btn = document.createElement("button");
			btn.className = "player-button";
			btn.type = "button";
			btn.style = "display: inline-block";
			btn.id = "pip-button";
			btn.innerHTML = '<span class="icon-1"></span>';
			btn.style.padding = "1px 5px 1em";
			document.querySelector("div.player-buttons-right").insertBefore(btn, document.querySelector("button.player-button--fullscreen"));
			btn.addEventListener("click", function() {
				document.querySelector("video").webkitSetPresentationMode('picture-in-picture');
			});
		}, 100);
	}
}, 100);
