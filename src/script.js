// All browser compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgentData
const mobile = /Android|iPhone/i.test(navigator.userAgent);
const themes = mobile ? ['mobile', 'dark', 'light'] : ['sys', 'dark', 'light'];
const icon = document.querySelector('nav > div > img');
const tooltip = document.querySelector('nav > div');
icon.src = `assets/icons/${themes[0]}.svg`;

let id = 0;
function switchTheme() {
	id = ++id % themes.length;
	const theme = themes[id];
	document.documentElement.className = theme;
	icon.src = `assets/icons/${theme}.svg`;
	tooltip.setAttribute('tooltip', 'theme::' + theme);
}
